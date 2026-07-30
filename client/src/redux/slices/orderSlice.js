import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialState = {
  orders: [],
  currentOrder: null,
  razorpayOrder: null,
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

export const createRazorpayOrder = createAsyncThunk(
  "order/createRazorpayOrder",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/payment/create-order", {
        orderId,
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

export const verifyRazorpayPayment = createAsyncThunk(
  "order/verifyRazorpayPayment",
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/payment/verify", paymentData);

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

export const markPaymentFailed = createAsyncThunk(
  "order/paymentFailed",

  async (orderId, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/payment/failed/${orderId}`);

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

      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      })

      .addCase(createRazorpayOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.razorpayOrder = action.payload;
      })

      .addCase(verifyRazorpayPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      })

      .addCase(markPaymentFailed.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(markPaymentFailed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Payment failed";
      })

      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })

      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      })

      .addMatcher(
        (action) =>
          action.type.startsWith("order/") && action.type.endsWith("/pending"),

        (state) => {
          state.loading = true;
          state.error = null;
        },
      )

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
