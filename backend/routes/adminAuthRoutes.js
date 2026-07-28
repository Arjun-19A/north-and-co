const express = require("express");

const router = express.Router();

const {
  loginAdmin,
  // getAdminProfile,
  logoutAdmin,
  tokenRefreshAdmin,
} = require("../controller/admin/auth");

const { protect, admin } = require("../middleware/authMiddleware");

router.post("/login", loginAdmin);

router.post("/logout", logoutAdmin);

router.post("/refresh-token", tokenRefreshAdmin);

// router.get("/me", protect, admin, getAdminProfile);

module.exports = router;
