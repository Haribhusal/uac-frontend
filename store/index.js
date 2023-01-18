import { configureStore, combinedReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postsSlice from "./posts";
import userInterestsSlice from "./userInterests";
import servicesSlice from "./services";

const store = configureStore({
  reducer: { postsSlice, userInterestsSlice, servicesSlice },
  middleware: [thunk],
});

export default store;
