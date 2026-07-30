const express = require("express");

const { protect, optionalProtect } = require("../middleware/authMiddleware");
const {
  addProduct,
  updateQuantity,
  removeProduct,
  fetchCart,
  mergeCart,
} = require("../controllers/cartController");

const router = express.Router();

// POST /api/cart
// Add a product to the cart for a guest or logged in user
router.post("/", optionalProtect, addProduct);

// PUT /api/cart
// Update product quantity in the cart for a guest or logged-in user
router.put("/", optionalProtect, updateQuantity);

// DELETE /api/cart
// Remove a product from the cart
router.delete("/", optionalProtect, removeProduct);

// GET /api/cart
// Get logged-in user's or guest user's cart
router.get("/", optionalProtect, fetchCart);

// POST /api/cart/merge
// Merge guest cart into user cart on login
router.post("/merge", protect, mergeCart);

module.exports = router;
