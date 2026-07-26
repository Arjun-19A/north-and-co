const Product = require("../../models/Product");
const Order = require("../../models/Order");
const User = require("../../models/User");

const getDashboard = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();

    const totalOrders = await Order.countDocuments();

    const totalCustomers = await User.countDocuments({
      role: "customer",
    });

    const revenue = await Order.aggregate([
      {
        $match: {
          orderStatus: {
            $ne: "Cancelled",
          },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalPrice",
          },
        },
      },
    ]);

    res.json({
      totalProducts,
      totalOrders,
      totalCustomers,
      totalRevenue: revenue[0]?.totalRevenue || 0,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getDashboard,
};
