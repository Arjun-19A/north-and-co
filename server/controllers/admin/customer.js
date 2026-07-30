const Order = require("../../models/Order");
const User = require("../../models/User");

const getCustomers = async (req, res) => {
  try {
    const customers = await User.aggregate([
      {
        $match: {
          role: "customer",
        },
      },

      {
        $lookup: {
          from: "orders",
          localField: "_id",
          foreignField: "user",
          as: "orders",
        },
      },

      {
        $addFields: {
          ordersCount: {
            $size: "$orders",
          },

          totalSpent: {
            $sum: "$orders.totalPrice",
          },
        },
      },

      {
        $project: {
          name: 1,
          email: 1,
          phone: 1,
          createdAt: 1,
          ordersCount: 1,
          totalSpent: 1,
        },
      },

      {
        $sort: {
          createdAt: -1,
        },
      },
    ]);

    res.status(200).json(customers);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getCustomerDetails = async (req, res) => {
  try {
    const customer = await User.findById(req.params.id).select(
      "name email phone createdAt"
    );

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    const orders = await Order.find({
      user: customer._id,
    })
      .select("orderId totalPrice orderStatus createdAt")
      .sort({ createdAt: -1 });

    const totalSpent = orders.reduce(
      (sum, order) => sum + order.totalPrice,
      0
    );

    res.json({
      ...customer.toObject(),
      ordersCount: orders.length,
      totalSpent,
      recentOrders: orders,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getCustomers,
  getCustomerDetails,
};
