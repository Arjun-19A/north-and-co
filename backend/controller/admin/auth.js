const jwt = require("jsonwebtoken");

const User = require("../../models/User");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/generateToken");

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password",
      });
    }

    const Admin = await User.findOne({ email }).select(
      "+password +refreshToken",
    );

    if (!Admin) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    if (Admin.role !== "admin") {
      return res.status(403).json({
        message: "Administrator privileges required",
      });
    }

    const isMatch = await Admin.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const refreshToken = generateRefreshToken(Admin);

    const accessToken = generateAccessToken(Admin);

    Admin.refreshToken = refreshToken;

    await Admin.save();

    res.cookie("adminRefreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Admin logged in successfully",
      user: {
        _id: Admin._id,
        name: Admin.name,
        email: Admin.email,
        role: Admin.role,
      },
      accessToken,
    });
  } catch (error) {
    console.error("ADMIN LOGIN ERROR:", error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const logoutAdmin = async (req, res) => {
  try {
    const refreshToken = req.cookies.adminRefreshToken;

    if (refreshToken) {
      await User.findOneAndUpdate(
        { refreshToken },
        {
          refreshToken: null,
        },
      );
    }

    res.clearCookie("adminRefreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("ADMIN LOGOUT ERROR:", error);

    res.status(500).json({
      message: "Logout failed",
    });
  }
};

const tokenRefreshAdmin = async (req, res) => {
  try {
    const adminRefreshToken = req.cookies.adminRefreshToken;

    if (!adminRefreshToken) {
      return res.status(401).json({
        message: "Admin refresh token missing",
      });
    }

    const decoded = jwt.verify(
      adminRefreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );

    const admin = await User.findById(decoded.id).select("+refreshToken");

    if (!admin) {
      return res.status(401).json({
        message: "Admin not found",
      });
    }

    if (admin.role !== "admin") {
      return res.status(403).json({
        message: "Admin access required",
      });
    }

    if (admin.refreshToken !== adminRefreshToken) {
      return res.status(401).json({
        message: "Refresh token invalid",
      });
    }

    const accessToken = generateAccessToken(admin);

    res.status(200).json({
      message: "Admin access token refreshed successfully",
      accessToken,
    });
  } catch (error) {
    console.error("ADMIN REFRESH TOKEN ERROR:", error);

    return res.status(401).json({
      message: "Invalid or expired refresh token",
    });
  }
};

// const getAdminProfile = async (req, res) => {
//   res.status(200).json({
//     _id: req.user._id,
//     name: req.user.name,
//     email: req.user.email,
//     role: req.user.role,
//   });
// };

module.exports = {
  loginAdmin,
  logoutAdmin,
  tokenRefreshAdmin,
  // getAdminProfile,
};
