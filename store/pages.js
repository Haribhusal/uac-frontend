import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPages = createAsyncThunk("allpages/fetchData", async () => {
  const response = await axios.get(
    "https://admin.uacktm.com/wp-json/wp/v2/pages"
  );

  return response.data;
});

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    getAboutPageData: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAboutPageData = pagesSlice.actions;
export default pagesSlice.reducer;
