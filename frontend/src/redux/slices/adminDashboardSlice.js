import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialState = {
  dashboard: null,
  loading: false,
  error: null,
};

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/admin/dashboard");

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

const dashboardSlice = createSlice({
  name: "dashboard",

  initialState,

  reducers: {
    clearDashboardError: (state) => {
      state.error = null;
    },

    clearDashboard: (state) => {
      state.dashboard = null;
      state.loading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboard = action.payload;
        state.error = null;
      })

      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      });
  },
});

export const { clearDashboardError, clearDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;
