const Order = require("../../models/Order");
const User = require("../../models/User");

// GET /api/admin/orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    console.error("GET ORDERS ERROR:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// GET /api/admin/orders/:id
const getOrderDetails = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email phone",
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// PATCH /api/admin/orders/:id/status
const updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    order.orderStatus = orderStatus;

    if (order.paymentMethod === "COD" && orderStatus === "Delivered") {
      order.paymentStatus = "Paid";
      order.isPaid = true;
      order.paidAt = new Date();
    }

    if (order.paymentMethod === "COD" && orderStatus === "Cancelled") {
      order.paymentStatus = "Cancelled";
      order.isPaid = false;
    }

    await order.save();

    const updatedOrder = await Order.findById(order._id).populate(
      "user",
      "name email phone",
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getOrders,
  getOrderDetails,
  updateOrderStatus,
};
