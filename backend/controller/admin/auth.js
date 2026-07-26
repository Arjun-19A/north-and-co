const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const generateAccessToken = require("../../utils/generateAccessToken");

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    if (admin.role !== "admin") {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const accessToken = generateAccessToken(admin._id);

    res.json({
      user: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
      accessToken,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getAdminProfile = async (req, res) => {
  res.json(req.user);
};

module.exports = {
  loginAdmin,
  getAdminProfile,
};
