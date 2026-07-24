const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");

const createOrder = async (req, res) => {
  try {
    const { paymentMethod, shippingAddress } = req.body;

    if (
      !shippingAddress ||
      !shippingAddress.fullName ||
      !shippingAddress.phone ||
      !shippingAddress.addressLine1 ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.postalCode
    ) {
      return res.status(400).json({
        message: "Shipping address is required",
      });
    }

    if (!["COD", "Razorpay", "Stripe"].includes(paymentMethod)) {
      return res.status(400).json({
        message: "Invalid payment method",
      });
    }

    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("products.productId");

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({
        message: "Your cart is empty.",
      });
    }

    const orderItems = cart.products.map((item) => {
      if (!item.productId) {
        throw new Error("Product no longer exists");
      }

      return {
        product: item.productId._id,
        name: item.productId.name,
        image: item.productId.images[0].url,
        price: item.price,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
      };
    });

    const itemsPrice = cart.products.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    const totalPrice = itemsPrice;

    for (const item of cart.products) {
      const product = item.productId;

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      if (product.countInStock < item.quantity) {
        return res.status(400).json({
          message: `${product.name} is out of stock`,
        });
      }
    }

    const order = await Order.create({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      totalPrice,
    });
    for (const item of cart.products) {
      await Product.findByIdAndUpdate(item.productId._id, {
        $inc: {
          countInStock: -item.quantity,
        },
      });
    }

    cart.products = [];
    cart.totalPrice = 0;

    await cart.save();

    res.status(201).json({
      message: "Order placed successfully.",
      order,
    });
  } catch (error) {
    console.error("PLACE ORDER ERROR:");
    console.error(error);

    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
}

const fetchOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      orders,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
}

const fetchOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "orderItems.product",
      "name images",
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    res.status(200).json({
      order,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
}

module.exports = {
    createOrder,
    fetchOrders,
    fetchOrderById
}