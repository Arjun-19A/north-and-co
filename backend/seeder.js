const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./data/products");
const connectToDB = require("./config/db");
const slugify = require("slugify");

dotenv.config();

connectToDB();

const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    const sampleProducts = products.map((product) => ({
      ...product,
      slug: slugify(product.name, {
        lower: true,
        strict: true,
      }),
      user: createdUser._id,
    }));

    await Product.insertMany(sampleProducts);

    console.log("Database seeded successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
