import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const authFromStorage = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

const userFromStorage = authFromStorage?.user || null;
const tokenFromStorage = authFromStorage?.token || null;

const getGuestId = () => {
  let guestId = localStorage.getItem("guestId");

  if (!guestId) {
    guestId = `guest_${Date.now()}`;
    localStorage.setItem("guestId", guestId);
  }

  return guestId;
};

const initialGuestId = getGuestId();

const saveAuth = (user, token) => {
  localStorage.setItem("auth", JSON.stringify({ user, token }));
};

const initialState = {
  userInfo: userFromStorage,
  token: tokenFromStorage,
  guestId: initialGuestId,
  loading: false,
  error: null,
  isAuthenticated: !!userFromStorage,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/user/register", userData);
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
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/user/login", userData);
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
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    try {
      await api.post("/api/user/logout");
    } finally {
      dispatch(logout());
    }
  },
);
export const updateProfile = createAsyncThunk(
  "auth/updateProfile",

  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.put("/api/user/profile", formData);

      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: error.message,
        },
      );
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.token = action.payload;

      if (state.userInfo) {
        saveAuth(state.userInfo, action.payload);
      }
    },

    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;

      state.guestId = `guest_${Date.now()}`;

      localStorage.removeItem("auth");
      localStorage.setItem("guestId", state.guestId);
    },
    clearError: (state) => {
      state.error = null;
    },
    generateNewGuestId: (state) => {
      state.guestId = `guest_${new Date().getTime()}`;
      localStorage.setItem("guestId", state.guestId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.userInfo = action.payload;

        saveAuth(action.payload, state.token);
      })

      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload?.message || "Something went wrong";
      });
  },
});

export const { logout, clearError, generateNewGuestId, setAccessToken } =
  authSlice.actions;
export default authSlice.reducer;
