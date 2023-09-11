import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserInterests = createAsyncThunk(
  "interest/fetchInterests",
  async () => {
    const response = await axios.get(
      "https://admin.uacktm.com/wp-json/wp/v2/user_interests?per_page=100"
    );
    return response.data;
  }
);
const userInterestsSlice = createSlice({
  name: "userInterests",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInterests.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserInterests.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUserInterests.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userInterestsSlice.reducer;
