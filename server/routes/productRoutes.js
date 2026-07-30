const express = require("express");

const { protect } = require("../middleware/authMiddleware");
const {
  newProduct,
  fetchNewArrivals,
  updateProduct,
  deleteProduct,
  fetchAllProducts,
  fetchProduct,
  fetchSimilarProducts,
  fetchFeaturedProducts,
  getBestSellerProducts,
} = require("../controllers/productController");

const router = express.Router();

// GET /api/products
// Get all products
router.get("/", fetchAllProducts);

// POST /api/products
// Create a new Product
router.post("/", protect, newProduct);

// GET /api/products/new-arrivals
// Retrieve latest 4 products - Creation date
router.get("/new-arrivals", fetchNewArrivals);

router.get("/featured", fetchFeaturedProducts);

router.get("/bestsellers", getBestSellerProducts);

// GET /api/products/similar/:id
// Retrieve similar products based on the current product's gender and category
router.get("/similar/:id", fetchSimilarProducts);

// PUT /api/products/:id
// Update an existing product ID
router.put("/:id", protect, updateProduct);

//DELETE /api/products/:id
// Delete a product by ID
router.delete("/:id", protect, deleteProduct);

// GET /api/products/:id
// Get a single product by ID
router.get("/:id", fetchProduct);

module.exports = router;
