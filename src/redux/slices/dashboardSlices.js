import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// FETCH DASHBOARD STATS
export const dashboard = createAsyncThunk(
  "dashboard/getStats",
  async (_, { rejectWithValue, getState }) => {
    try {
      // Get token from Redux store
      const token = getState().adminAuth.token;

    //   console.log("TOKEN FROM REDUX:", token);


      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/admin/stats`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error fetching stats"
      );
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    loading: false,
    error: null,
    stats: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(dashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })

      .addCase(dashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // string now
      });
  },
});

export default dashboardSlice.reducer;
