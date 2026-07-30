const express = require("express");

const router = express.Router();

const {
  createPaymentOrder,
  verifyPayment,
  paymentFailed,
  razorpayWebhook,
} = require("../controllers/paymentController");

const { protect } = require("../middleware/authMiddleware");

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  razorpayWebhook,
);

router.post("/create-order", protect, createPaymentOrder);

router.post("/verify", protect, verifyPayment);

router.put("/failed/:orderId", protect, paymentFailed);

module.exports = router;
