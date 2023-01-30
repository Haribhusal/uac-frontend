import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  async () => {
    const response = await axios.get(
      "https://fitnesshoursnepal.com/univa/wp-json/wp/v2/settings"
    );
    return response.data;
  }
);

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default settingsSlice.reducer;
