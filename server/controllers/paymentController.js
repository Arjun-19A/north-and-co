const razorpay = require("../config/razorpay");
const crypto = require("crypto");

const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");

const completePaidOrder = async (order, paymentId, paymentSignature) => {
  if (order.isPaid) {
    return order;
  }

  for (const item of order.orderItems) {
    const product = await Product.findById(item.product);

    if (!product) {
      throw new Error("Product not found");
    }
    if (product.countInStock < item.quantity) {
      throw new Error(`${product.name} does not have enough stock`);
    }
  }

  for (const item of order.orderItems) {
    const product = await Product.findById(item.product);
    product.countInStock -= item.quantity;
    await product.save();
  }

  order.isPaid = true;
  order.paymentStatus = "Paid";
  order.paidAt = new Date();
  order.razorpayPaymentId = paymentId;
  if (paymentSignature) {
    order.razorpaySignature = paymentSignature;
  }
  await order.save();

  const cart = await Cart.findOne({
    user: order.user,
  });

  if (cart) {
    cart.products = [];
    cart.totalPrice = 0;
    await cart.save();
  }
};

const createPaymentOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await Order.findOne({
      _id: orderId,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    if (order.isPaid) {
      return res.status(400).json({
        message: "Order already paid",
      });
    }

    const razorpayOrder = await razorpay.orders.create({
      amount: Math.round(order.totalPrice * 100),
      currency: "INR",
      receipt: order.orderId,
    });

    order.razorpayOrderId = razorpayOrder.id;
    await order.save();

    res.status(200).json({
      key: process.env.RAZORPAY_KEY_ID,
      razorpayOrder,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Unable to create Razorpay order",
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }
    const order = await Order.findOne({
      razorpayOrderId: razorpay_order_id,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    await completePaidOrder(order, razorpay_payment_id, razorpay_signature);

    res.status(200).json({
      success: true,
      message: "Payment successful",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Payment verification failed",
    });
  }
};

const paymentFailed = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({
      _id: orderId,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    if (!order.isPaid) {
      order.paymentStatus = "Failed";
      await order.save();
    }
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const razorpayWebhook = async (req, res) => {
  try {
    const signature = req.headers["x-razorpay-signature"];

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
      .update(req.body)
      .digest("hex");

    if (signature !== expectedSignature) {
      return res.status(400).json({
        message: "Invalid webhook signature",
      });
    }

    const event = JSON.parse(req.body);
    const payment = event.payload.payment.entity;
    const order = await Order.findOne({
      razorpayOrderId: payment.order_id,
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    if (event.event === "payment.failed") {
      if (!order.isPaid) {
        order.paymentStatus = "Failed";
        await order.save();
      }
    }

    if (event.event === "payment.captured") {
      await completePaidOrder(order, payment.id);
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Webhook failed",
    });
  }
};

module.exports = {
  createPaymentOrder,
  verifyPayment,
  paymentFailed,
  razorpayWebhook,
};
