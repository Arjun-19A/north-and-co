import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchCustomers = createAsyncThunk(
  "adminCustomers/fetchCustomers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/admin/customers");

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

export const fetchCustomerDetails = createAsyncThunk(
  "adminCustomers/fetchCustomerDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/admin/customers/${id}`);

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

const adminCustomerSlice = createSlice({
  name: "adminCustomers",

  initialState: {
    customers: [],
    customerDetails: null,
    loading: false,
    error: null,
  },

  reducers: {
    clearCustomerError: (state) => {
      state.error = null;
    },

    clearCustomers: (state) => {
      state.customers = [];
      state.loading = false;
      state.error = null;
    },

    resetCustomerDetails: (state) => {
      state.customerDetails = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Fetch Customers

      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;
      })

      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch customers";
      })

      .addCase(fetchCustomerDetails.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCustomerDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.customerDetails = action.payload;
      })

      .addCase(fetchCustomerDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch customer";
      });
  },
});

export const { clearCustomerError, clearCustomers, resetCustomerDetails } =
  adminCustomerSlice.actions;

export default adminCustomerSlice.reducer;
