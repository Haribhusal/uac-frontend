import { configureStore, combinedReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postsSlice from "./posts";
import userInterestsSlice from "./userInterests";
import servicesSlice from "./services";
import pagesSlice from './pages'
import teamSlice from './team'

const store = configureStore({
  reducer: { postsSlice, userInterestsSlice, servicesSlice, pagesSlice, teamSlice },
  middleware: [thunk],
});

export default store;
