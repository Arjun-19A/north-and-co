const Cart = require("../models/Cart");
const Product = require("../models/Product");

const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId });
  }
  return null;
};

const calculateTotal = (products) =>
  products.reduce((total, item) => total + item.price * item.quantity, 0);

const addProduct = async (req, res) => {
  const { productId, quantity, size, color, guestId } = req.body;
  const userId = req.user?._id;

  if (!Number.isInteger(quantity) || quantity < 1) {
    return res.status(400).json({
      message: "Invalid quantity",
    });
  }
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await getCart(userId, guestId);
    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color,
      );

      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({
          productId,
          name: product.name,
          image: product.images?.[0]?.url || "",
          price: product.discountPrice || product.price,
          size,
          color,
          quantity,
        });
      }

      cart.totalPrice = calculateTotal(cart.products);

      await cart.save();
      return res.status(200).json(cart);
    } else {
      const newCart = await Cart.create({
        user: userId ? userId : undefined,

        guestId: userId ? undefined : guestId,

        expiresAt: userId
          ? null
          : new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),

        products: [
          {
            productId,
            name: product.name,
            image: product.images?.[0]?.url || "",
            price: product.discountPrice || product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: (product.discountPrice || product.price) * quantity,
      });

      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateQuantity = async (req, res) => {
  const { productId, quantity, size, color, guestId } = req.body;
  const userId = req.user?._id;

  try {
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color,
    );

    if (productIndex === -1) {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }

    if (quantity > 0) {
      cart.products[productIndex].quantity = quantity;
    } else {
      cart.products.splice(productIndex, 1);
    }

    cart.totalPrice = calculateTotal(cart.products);

    await cart.save();

    return res.status(200).json(cart);

    // return res.status(404).json({
    //   message: "Product not found in cart",
    // });
  } catch (error) {
    return res.status(404).json({ message: " Product not found in cart." });
  }
};

const removeProduct = async (req, res) => {
  const { productId, size, color, guestId } = req.body;
  const userId = req.user?._id;

  try {
    let cart = await getCart(userId, guestId);

    if (!cart) return res.status(404).json({ message: "cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color,
    );

    if (productIndex > -1) {
      cart.products.splice(productIndex, 1);

      cart.totalPrice = calculateTotal(cart.products);

      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product Not Found in cart" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const fetchCart = async (req, res) => {
  const userId = req.user?._id;
  const { guestId } = req.query;

  try {
    const cart = await getCart(userId, guestId);

    if (!cart) {
      return res.json({
        products: [],
        totalPrice: 0,
      });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const mergeCart = async (req, res) => {
  const { guestId } = req.body;

  if (!guestId) {
    const userCart = await Cart.findOne({ user: req.user._id });

    return res.status(200).json(
      userCart || {
        products: [],
        totalPrice: 0,
      },
    );
  }

  try {
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user._id });

    if (guestCart) {
      if (guestCart.products.length === 0) {
        await Cart.findOneAndDelete({ guestId });

        if (userCart) {
          return res.status(200).json(userCart);
        }

        return res.status(200).json({
          products: [],
          totalPrice: 0,
        });
      }
      if (userCart) {
        guestCart.products.forEach((guestItem) => {
          const productIndex = userCart.products.findIndex(
            (item) =>
              item.productId.toString() === guestItem.productId.toString() &&
              item.size === guestItem.size &&
              item.color === guestItem.color,
          );

          if (productIndex > -1) {
            userCart.products[productIndex].quantity += guestItem.quantity;
          } else {
            userCart.products.push(guestItem);
          }
        });

        userCart.totalPrice = calculateTotal(userCart.products);
        await userCart.save();

        await Cart.findOneAndDelete({ guestId });

        return res.status(200).json(userCart);
      } else {
        guestCart.user = req.user._id;
        guestCart.guestId = undefined;
        guestCart.expiresAt = null;
        await guestCart.save();

        return res.status(200).json(guestCart);
      }
    } else {
      if (userCart) {
        return res.status(200).json(userCart);
      }

      return res.status(200).json({
        products: [],
        totalPrice: 0,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  addProduct,
  updateQuantity,
  removeProduct,
  fetchCart,
  mergeCart,
};
