const express = require("express");

const router = express.Router();

const {
  loginAdmin,
  logoutAdmin,
  tokenRefreshAdmin,
} = require("../controllers/admin/auth");

router.post("/login", loginAdmin);

router.post("/logout", logoutAdmin);

router.post("/refresh-token", tokenRefreshAdmin);

module.exports = router;
