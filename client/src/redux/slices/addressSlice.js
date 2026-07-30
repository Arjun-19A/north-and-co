import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

export const fetchAddresses = createAsyncThunk(
  "address/fetchAddresses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/user/addresses");

      return response.data.addresses;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);


export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (addressData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/user/addresses", addressData);

      return response.data.addresses;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async ({ addressId, formData }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/api/user/addresses/${addressId}`,
        formData,
      );

      return response.data.addresses;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (addressId, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/api/user/addresses/${addressId}`);

      return response.data.addresses;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

export const setDefaultAddress = createAsyncThunk(
  "address/setDefaultAddress",
  async (addressId, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        `/api/user/addresses/${addressId}/default`,
      );

      return response.data.addresses;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

const addressSlice = createSlice({
  name: "address",
  initialState,

  reducers: {
    clearAddressError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Pending
      .addMatcher(
        (action) =>
          action.type.startsWith("address/") &&
          action.type.endsWith("/pending"),

        (state) => {
          state.loading = true;
          state.error = null;
        },
      )

      // Fulfilled
      .addMatcher(
        (action) =>
          action.type.startsWith("address/") &&
          action.type.endsWith("/fulfilled"),

        (state, action) => {
          state.loading = false;

          if (Array.isArray(action.payload)) {
            state.addresses = action.payload;
          }
        },
      )

      // Rejected
      .addMatcher(
        (action) =>
          action.type.startsWith("address/") &&
          action.type.endsWith("/rejected"),

        (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || "Something went wrong";
        },
      );
  },
});

export const { clearAddressError } = addressSlice.actions;

export default addressSlice.reducer;
