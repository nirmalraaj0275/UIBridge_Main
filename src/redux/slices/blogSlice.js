import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_BASE_URL;

// ========================================================
// CREATE BLOG
// ========================================================
export const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/api/blog/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error creating blog");
    }
  }
);

// ========================================================
// GET ALL BLOGS
// ========================================================
export const getBlogs = createAsyncThunk(
  "blogs/getBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/api/blog/getblogs`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching blogs");
    }
  }
);

// ========================================================
// GET SINGLE BLOG BY ID
// ========================================================
export const getBlogById = createAsyncThunk(
  "blogs/getBlogById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/api/blog/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching blog");
    }
  }
);

// ========================================================
// UPDATE BLOG
// ========================================================
export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${API}/api/blog/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error updating blog");
    }
  }
);

// ========================================================
// DELETE BLOG
// ========================================================
export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${API}/api/blog/${id}`);
      return { id, message: res.data.message };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error deleting blog");
    }
  }
);

// ========================================================
// SLICE
// ========================================================
const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    loading: false,
    blogs: [],
    singleBlog: null,
    success: false,
    error: null,
  },

  reducers: {
    resetStatus: (state) => {
      state.success = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // CREATE BLOG
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.blogs.push(action.payload);
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET ALL BLOGS
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET SINGLE BLOG
      .addCase(getBlogById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleBlog = action.payload;
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE BLOG
      .addCase(updateBlog.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        // update blog in list
        state.blogs = state.blogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        );

        state.singleBlog = action.payload;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE BLOG
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.blogs = state.blogs.filter(
          (blog) => blog._id !== action.payload.id
        );
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = blogSlice.actions;
export default blogSlice.reducer;
