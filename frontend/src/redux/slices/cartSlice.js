import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const loadCartFromStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");

    return storedCart
      ? JSON.parse(storedCart)
      : {
          products: [],
          totalPrice: 0,
        };
  } catch {
    return {
      products: [],
      totalPrice: 0,
    };
  }
};

const saveCartToStorage = (cart) => {
  try {
    if (!cart) return;
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (err) {
    console.error("Failed to save cart", err);
  }
};

const initialState = {
  cart: loadCartFromStorage(),
  loading: false,
  error: null,
};

// Fetch Cart
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ guestId }, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/cart", {
        params: { guestId },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

// Add Product
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { productId, quantity, size, color, guestId },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post("/api/cart", {
        productId,
        quantity,
        size,
        color,
        guestId,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

// Update Quantity
export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async (
    { productId, quantity, size, color, guestId },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.put("/api/cart", {
        productId,
        quantity,
        size,
        color,
        guestId,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

// Remove Product
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ productId, size, color, guestId }, { rejectWithValue }) => {
    try {
      const response = await api.delete("/api/cart", {
        data: {
          productId,
          size,
          color,
          guestId,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

// Merge Guest Cart
export const mergeCart = createAsyncThunk(
  "cart/mergeCart",
  async ({ guestId }, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/cart/merge", { guestId });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    clearCart(state) {
      state.cart = {
        products: [],
        totalPrice: 0,
      };

      localStorage.removeItem("cart");
    },
  },

  extraReducers: (builder) => {
    builder

      // Fetch
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        if (!action.payload.user) {
          saveCartToStorage(action.payload);
        }
      })

      // Add
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        if (!action.payload.user) {
          saveCartToStorage(action.payload);
        }
      })

      // Update
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        if (!action.payload.user) {
          saveCartToStorage(action.payload);
        }
      })

      // Remove
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        if (!action.payload.user) {
          saveCartToStorage(action.payload);
        }
      })

      // Merge
      .addCase(mergeCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;

        localStorage.removeItem("cart");
      })

      // Rejected matcher
      .addMatcher(
        (action) =>
          action.type.startsWith("cart/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || "Something went wrong";
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("cart/") && action.type.endsWith("/pending"),

        (state) => {
          state.loading = true;
          state.error = null;
        },
      );
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state) => state.cart.cart;
export const selectCartProducts = (state) => state.cart.cart.products;
export const selectCartTotal = (state) => state.cart.cart.totalPrice;
export const selectCartLoading = (state) => state.cart.loading;
export const selectCartCount = (state) =>
  (state.cart.cart.products ?? []).reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

export const selectCartSubtotal = (state) =>
  (state.cart.cart.products ?? []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
