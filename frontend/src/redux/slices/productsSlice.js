import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialFilters = {
  category: "",
  size: "",
  color: "",
  gender: "",
  brand: "",
  minPrice: "",
  maxPrice: "",
  sortBy: "",
  search: "",
  material: "",
  collectionName: "",
};

export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchProductsByFilters",
  async (filters, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        if (value !== "" && value !== undefined && value !== null) {
          query.append(key, value);
        }
      });

      const response = await api.get(`/api/products?${query.toString()}`);
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

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/products/${id}`);
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

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, productData }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await api.put(`/api/products/${id}`, productData, {
        headers: {
          Authorization: `Bearer ${token}`,
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

export const fetchSimilarProducts = createAsyncThunk(
  "products/fetchSimilarProducts",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/products/similar/${id}`);
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

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async ({ id }, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await api.delete(`/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
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

export const fetchNewArrivals = createAsyncThunk(
  "products/fetchNewArrivals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/products/new-arrivals");
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

export const fetchFeaturedProducts = createAsyncThunk(
  "products/fetchFeaturedProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/products/featured");
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

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    newArrivals: [],
    featuredProducts: [],
    selectedProduct: null,
    similarProducts: [],
    filters: initialFilters,

    loading: {
      products: false,
      newArrivals: false,
      featured: false,
      productDetails: false,
      similarProducts: false,
    },

    error: {
      products: null,
      newArrivals: null,
      featured: null,
      productDetails: null,
      similarProducts: null,
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialFilters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByFilters.pending, (state) => {
        state.loading.products = true;
        state.error.products = null;
      })
      .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
        state.loading.products = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilters.rejected, (state, action) => {
        state.loading.products = false;
        state.error.products =
          action.payload?.message || "Failed to fetch products";
      })

      .addCase(fetchProductDetails.pending, (state) => {
        state.loading.productDetails = true;
        state.error.productDetails = null;
      })

      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading.productDetails = false;
        state.selectedProduct = action.payload;
      })

      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading.productDetails = false;
        state.error.productDetails =
          action.payload?.message || "Failed to fetch product";
      })

      .addCase(fetchSimilarProducts.pending, (state) => {
        state.loading.similarProducts = true;
      })

      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.loading.similarProducts = false;
        state.similarProducts = action.payload;
      })

      .addCase(fetchSimilarProducts.rejected, (state, action) => {
        state.loading.similarProducts = false;
        state.error.similarProducts =
          action.payload?.message || "Failed to fetch similar products";
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product,
        );

        if (
          state.selectedProduct &&
          state.selectedProduct._id === action.payload._id
        ) {
          state.selectedProduct = action.payload;
        }
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id,
        );
      })

      .addCase(fetchNewArrivals.pending, (state) => {
        state.loading.newArrivals = true;
        state.error.newArrivals = null;
      })
      .addCase(fetchNewArrivals.fulfilled, (state, action) => {
        state.loading.newArrivals = false;
        state.newArrivals = action.payload;
      })
      .addCase(fetchNewArrivals.rejected, (state, action) => {
        state.loading.newArrivals = false;
        state.error.newArrivals =
          action.payload?.message || "Failed to load new arrivals";
      })
      .addCase(fetchFeaturedProducts.pending, (state) => {
        state.loading.featured = true;
        state.error.featured = null;
      })

      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.loading.featured = false;
        state.featuredProducts = action.payload;
      })

      .addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.loading.featured = false;
        state.error.featured =
          action.payload?.message || "Failed to load featured products";
      });
  },
});

export default productsSlice.reducer;
