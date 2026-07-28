import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "adminProducts/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/admin/products");

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

export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/admin/products", productData);

      return response.data.product;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/admin/products/${id}`, productData);

      return response.data.product;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/api/admin/products/${id}`);

      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

const adminProductSlice = createSlice({
  name: "adminProducts",

  initialState,

  reducers: {
    clearProductError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      })

      // CREATE
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.unshift(action.payload);
      })

      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      })

      // UPDATE
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;

        state.products = state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product,
        );
      })

      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      })

      // DELETE
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;

        state.products = state.products.filter(
          (product) => product._id !== action.payload,
        );
      })

      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      });
  },
});

export const { clearProductError } = adminProductSlice.actions;

export default adminProductSlice.reducer;
