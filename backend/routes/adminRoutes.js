const express = require("express");

const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const { getDashboard } = require("../controller/admin/dashboard");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/admin/product");
const {
  getOrders,
  getOrderDetails,
  updateOrderStatus,
} = require("../controller/admin/order");
const {
  getCustomers,
  getCustomerDetails,
} = require("../controller/admin/customer");

const { uploadImages } = require("../controller/admin/upload");

const upload = require("../middleware/upload");

router.use(protect, admin);

router.post("/upload", upload.array("images", 5), uploadImages);

router.get("/dashboard", getDashboard);

router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/orders", getOrders);
router.get("/orders/:id", getOrderDetails);
router.patch("/orders/:id/status", updateOrderStatus);

router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomerDetails);

module.exports = router;
