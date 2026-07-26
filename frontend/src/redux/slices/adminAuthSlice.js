import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const authFromStorage = localStorage.getItem("adminAuth")
  ? JSON.parse(localStorage.getItem("adminAuth"))
  : null;

const adminFromStorage = authFromStorage?.user || null;
const tokenFromStorage = authFromStorage?.token || null;

const saveAuth = (user, token) => {
  localStorage.setItem(
    "adminAuth",
    JSON.stringify({
      user,
      token,
    }),
  );
};

export const loginAdmin = createAsyncThunk(
  "adminAuth/loginAdmin",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/admin/login", formData);

      saveAuth(response.data.user, response.data.accessToken);

      return {
        user: response.data.user,
        token: response.data.accessToken,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

export const getAdminProfile = createAsyncThunk(
  "adminAuth/getAdminProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/admin/me");

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

export const logoutAdmin = createAsyncThunk(
  "adminAuth/logoutAdmin",
  async (_, { dispatch }) => {
    dispatch(logout());
  },
);

const adminAuthSlice = createSlice({
  name: "adminAuth",

  initialState: {
    adminInfo: adminFromStorage,
    token: tokenFromStorage,
    isAuthenticated: !!adminFromStorage,
    loading: false,
    error: null,
  },

  reducers: {
    logout: (state) => {
      state.adminInfo = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;

      localStorage.removeItem("adminAuth");
    },

    clearAdminError: (state) => {
      state.error = null;
    },

    setAdminToken: (state, action) => {
      state.token = action.payload;

      if (state.adminInfo) {
        saveAuth(state.adminInfo, action.payload);
      }
    },
  },

  extraReducers: (builder) => {
    builder

      // Login

      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.adminInfo = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })

      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      })

      // Profile

      .addCase(getAdminProfile.fulfilled, (state, action) => {
        state.adminInfo = action.payload;
      })

      .addCase(getAdminProfile.rejected, (state) => {
        state.adminInfo = null;
        state.token = null;
        state.isAuthenticated = false;

        localStorage.removeItem("adminAuth");
      });
  },
});

export const { logout, clearAdminError, setAdminToken } =
  adminAuthSlice.actions;

export default adminAuthSlice.reducer;
