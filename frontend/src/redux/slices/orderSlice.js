import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialState = {
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,
};

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async ({ paymentMethod, shippingAddress }, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/orders", {
        paymentMethod,
        shippingAddress,
      });

      return response.data.order;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

export const fetchMyOrders = createAsyncThunk(
  "order/fetchMyOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/orders/my-orders");

      return response.data.orders;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

export const fetchOrderDetails = createAsyncThunk(
  "order/fetchOrderDetails",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/orders/${orderId}`);

      return response.data.order;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

const orderSlice = createSlice({
  name: "order",

  initialState,

  reducers: {
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },

    clearOrderError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Place Order
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      })

      // Orders List
      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })

      // Order Details
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      })

      // Pending
      .addMatcher(
        (action) =>
          action.type.startsWith("order/") && action.type.endsWith("/pending"),

        (state) => {
          state.loading = true;
          state.error = null;
        },
      )

      // Rejected
      .addMatcher(
        (action) =>
          action.type.startsWith("order/") && action.type.endsWith("/rejected"),

        (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || "Something went wrong";
        },
      );
  },
});

export const { clearCurrentOrder, clearOrderError } = orderSlice.actions;

export default orderSlice.reducer;
