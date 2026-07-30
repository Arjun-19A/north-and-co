const express = require("express");

const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const { getDashboard } = require("../controllers/admin/dashboard");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/admin/product");
const {
  getOrders,
  getOrderDetails,
  updateOrderStatus,
} = require("../controllers/admin/order");
const {
  getCustomers,
  getCustomerDetails,
} = require("../controllers/admin/customer");

const { uploadImages } = require("../controllers/admin/upload");

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
