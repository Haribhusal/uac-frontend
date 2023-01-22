import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeam = createAsyncThunk("team/teamMember", async () => {
  const response = await axios.get(
    "https://fitnesshoursnepal.com/univa/wp-json/wp/v2/team"
  );
  return response.data;
});

const teamSlice = createSlice({
  name: "team",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeam.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeam.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTeam.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default teamSlice.reducer;
