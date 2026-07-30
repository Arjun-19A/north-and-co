const Product = require("../../models/Product");
const Order = require("../../models/Order");
const User = require("../../models/User");

const getDashboard = async (req, res) => {
  try {
    const [
      totalProducts,
      totalOrders,
      totalCustomers,
      revenue,
      recentOrders,
      orderStatusStats,
      lowStockProducts,
    ] = await Promise.all([
      Product.countDocuments(),

      Order.countDocuments(),

      User.countDocuments({
        role: "customer",
      }),

      Order.aggregate([
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
      ]),

      Order.find()
        .populate("user", "name email")
        .sort({ createdAt: -1 })
        .limit(5)
        .select("orderId totalPrice orderStatus createdAt user paymentMethod"),

      Order.aggregate([
        {
          $group: {
            _id: "$orderStatus",
            count: {
              $sum: 1,
            },
          },
        },
      ]),

      Product.find({
        countInStock: { $lte: 10 },
      })
        .select("name sku countInStock")
        .sort({ countInStock: 1 })
        .limit(5),
    ]);

    const statusCounts = {
      Pending: 0,
      Processing: 0,
      Shipped: 0,
      Delivered: 0,
      Cancelled: 0,
    };

    orderStatusStats.forEach((item) => {
      statusCounts[item._id] = item.count;
    });

    res.status(200).json({
      products: totalProducts,
      orders: totalOrders,
      customers: totalCustomers,
      revenue: revenue[0]?.totalRevenue || 0,

      recentOrders,
      lowStockProducts,

      orderStatus: statusCounts,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getDashboard,
};
