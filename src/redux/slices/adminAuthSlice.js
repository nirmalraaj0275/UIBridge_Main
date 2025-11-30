import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// LOGIN API CALL
export const adminLogin = createAsyncThunk(
  "admin/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/admin/login`,
        { username, password }
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed. Try again."
      );
    }
  }
);

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    loading: false,
    error: null,
    token: localStorage.getItem("adminToken") || null,
    isAuthenticated: !!localStorage.getItem("adminToken"),
  },

  reducers: {
    adminLogout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("adminToken");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("adminToken", action.payload.token);
      })

      .addCase(adminLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
