const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const {
  createOrder,
  fetchOrders,
  fetchOrderById,
} = require("../controllers/orderController");

const router = express.Router();

// POST /api/orders
router.post("/", protect, createOrder);

// GET /api/orders/my-orders
router.get("/my-orders", protect, fetchOrders);

// GET /api/orders/:id
router.get("/:id", protect, fetchOrderById);

module.exports = router;
