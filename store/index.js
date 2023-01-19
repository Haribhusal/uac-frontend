import { configureStore, combinedReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postsSlice from "./posts";
import userInterestsSlice from "./userInterests";
import servicesSlice from "./services";
import pagesSlice from './pages'

const store = configureStore({
  reducer: { postsSlice, userInterestsSlice, servicesSlice, pagesSlice },
  middleware: [thunk],
});

export default store;
