import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendMail = createAsyncThunk("mail/sendMail", async (payload) => {
const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/mail/send`, payload);

  return res.data;
});

const mailSlice = createSlice({
  name: "mail",
  initialState: { loading: false, success: false, message: "" },
  extraReducers: (builder) => {
    builder
      .addCase(sendMail.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(sendMail.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(sendMail.rejected, (state) => {
        state.loading = false;
        state.success = false;
        state.message = "Failed to send email";
      });
  },
});

export default mailSlice.reducer;
