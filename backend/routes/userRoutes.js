const express = require("express");

const { protect } = require("../middleware/authMiddleware");
const {
  register,
  login,
  profile,
  tokenRefresh,
  logout,
  profileUpdate,
  addAddress,
  savedAddress,
  updateAddress,
  deleteAddress,
  defaultAddress,
} = require("../controller/userController");

const router = express.Router();

// POST /api/user/register
router.post("/register", register);

// POST /api/user/login
router.post("/login", login);

// GET /api/user/profile
router.get("/profile", protect, profile);

// POST /api/user/refresh-token
router.post("/refresh-token", tokenRefresh);

// POST /api/user/logout
router.post("/logout", logout);

// PUT /api/user/profile
router.put("/profile", protect, profileUpdate);

// POST /api/user/addresses
// Add new address
router.post("/addresses", protect, addAddress);

// GET /api/user/addresses
// Get all saved addresses
router.get("/addresses", protect, savedAddress);

// PUT /api/user/addresses/:addressId
// Update an existing address
router.put("/addresses/:addressId", protect, updateAddress);

// DELETE /api/user/addresses/:addressId
// Delete address
router.delete("/addresses/:addressId", protect, deleteAddress);

// PATCH /api/user/addresses/:addressId/default
// Set default address
router.patch("/addresses/:addressId/default", protect, defaultAddress);

module.exports = router;
