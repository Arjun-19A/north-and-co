const mongoose = require("mongoose");
const dotenv = require("dotenv");
const slugify = require("slugify");

const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");

const products = require("./data/products");
const connectToDB = require("./config/db");

dotenv.config();

connectToDB();

const seedData = async () => {
  try {
    await Product.deleteMany();
    await Cart.deleteMany();

    let adminUser = await User.findOne({
      email: "admin@example.com",
    });

    if (!adminUser) {
      adminUser = await User.create({
        name: "Admin User",
        email: "admin@example.com",
        password: "123456",
        role: "admin",
      });
    }

    const customerExists = await User.findOne({
      email: "customer@example.com",
    });

    if (!customerExists) {
      await User.create({
        name: "Customer",
        email: "customer@example.com",
        password: "123456",
        role: "customer",
      });
    }

    const sampleProducts = products.map((product) => ({
      ...product,
      slug: slugify(product.name, {
        lower: true,
        strict: true,
      }),
      user: adminUser._id,
    }));

    await Product.insertMany(sampleProducts);

    console.log("Database seeded successfully!");
    console.log("");
    console.log("Demo Credentials");
    console.log("-----------------------------");
    console.log("Admin");
    console.log("Email: admin@example.com");
    console.log("Password: 123456");
    console.log("");
    console.log("Customer");
    console.log("Email: customer@example.com");
    console.log("Password: 123456");
    console.log("");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
