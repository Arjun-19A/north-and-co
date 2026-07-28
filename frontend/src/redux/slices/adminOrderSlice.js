import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchAdminOrders = createAsyncThunk(
  "adminOrders/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/admin/orders");
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

export const fetchAdminOrderDetails = createAsyncThunk(
  "adminOrders/fetchOrderDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/admin/orders/${id}`);
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

export const updateAdminOrderStatus = createAsyncThunk(
  "adminOrders/updateStatus",
  async ({ id, orderStatus }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/api/admin/orders/${id}/status`, {
        orderStatus,
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

const adminOrderSlice = createSlice({
  name: "adminOrders",

  initialState: {
    orderList: [],
    orderDetails: null,
    loading: false,
    error: null,
  },

  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
    },

    clearOrderError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Fetch Orders

      .addCase(fetchAdminOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchAdminOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orderList = action.payload;
      })

      .addCase(fetchAdminOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch orders";
      })

      // Fetch Order Details

      .addCase(fetchAdminOrderDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchAdminOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload;
      })

      .addCase(fetchAdminOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch order";
      })

      // Update Status

      .addCase(updateAdminOrderStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateAdminOrderStatus.fulfilled, (state, action) => {
        state.loading = false;

        const updatedOrder = action.payload;

        state.orderList = state.orderList.map((order) =>
          order._id === updatedOrder._id ? updatedOrder : order,
        );

        state.orderDetails = updatedOrder;
      })

      .addCase(updateAdminOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update order";
      });
  },
});

export default adminOrderSlice.reducer;
export const { resetOrderDetails, clearOrderError } = adminOrderSlice.actions;
