const Product = require("../models/Product");
const slugify = require("slugify");
const mongoose = require("mongoose");

const newProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collectionName,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !collectionName ||
      !gender ||
      !sku
    ) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    const slug = slugify(name, {
      lower: true,
      strict: true,
    });

    const product = new Product({
      name,
      slug,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collectionName,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id,
    });

    const createdProduct = await product.save();
    res.status(201).json({
      message: "Product created successfully",
      product: createdProduct,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        message: "SKU already exists",
      });
    }
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const fetchNewArrivals = async (req, res) => {
  try {
    const newArrivals = await Product.find()
      .select("name slug price discountPrice images collectionName")
      .sort({ createdAt: -1 })
      .limit(3);

    res.status(200).json(newArrivals);
  } catch (error) {
    console.error("Error fetching new arrivals:", error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collectionName,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      if (name) {
        product.name = name;
        product.slug = slugify(name, {
          lower: true,
          strict: true,
        });
      }
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collectionName = collectionName || product.collectionName;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      return res.status(200).json({
        message: "Product deleted successfully",
      });
    } else {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const fetchAllProducts = async (req, res) => {
  try {
    const {
      collectionName,
      size,
      color,
      gender,
      sortBy,
      search,
      category,
      material,
      brand,
    } = req.query;

    const page = Number(req.query.page) || 1;
    const pageLimit = Number(req.query.limit) || 12;
    const skip = (page - 1) * pageLimit;

    let query = {};

    if (collectionName && collectionName.toLowerCase() !== "all") {
      query.collectionName = collectionName;
    }

    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }

    if (material) query.material = { $in: material.split(",") };
    if (brand) query.brand = { $in: brand.split(",") };
    if (size) query.sizes = { $in: size.split(",") };
    if (color) query.colors = { $in: color.split(",") };
    if (gender) query.gender = { $in: gender.split(",") };

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { gender: { $regex: search, $options: "i" } },
      ];
    }

    let sort = {};

    switch (sortBy) {
      case "price-asc":
        sort = { price: 1 };
        break;

      case "price-desc":
        sort = { price: -1 };
        break;

      case "name-asc":
        sort = { name: 1 };
        break;

      case "newest":
        sort = { createdAt: -1 };
        break;

      default:
        sort = { createdAt: -1 };
    }

    const totalProducts = await Product.countDocuments(query);

    const products = await Product.find(query)
      .sort(sort)
      .skip(skip)
      .limit(pageLimit);

    res.json({
      products,
      page,
      totalPages: Math.ceil(totalProducts / pageLimit),
      totalProducts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const fetchProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const fetchSimilarProducts = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid product ID",
    });
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const similarProducts = await Product.aggregate([
      {
        $match: {
          _id: { $ne: product._id },
          gender: product.gender,
          category: product.category,
        },
      },
      { $sample: { size: 8 } },
    ]);

    res.json(similarProducts);
  } catch (error) {
    console.error("Error fetching similar products:", error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const fetchFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({
      isFeatured: true,
    }).limit(8);

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getBestSellerProducts = async (req, res) => {
  try {
    const products = await Product.find({
      isFeatured: { $ne: true },
    })
      .sort({
        rating: -1,
        numReviews: -1,
      })
      .limit(8);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  newProduct,
  fetchNewArrivals,
  updateProduct,
  deleteProduct,
  fetchAllProducts,
  fetchProduct,
  fetchSimilarProducts,
  fetchFeaturedProducts,
  getBestSellerProducts,
};
