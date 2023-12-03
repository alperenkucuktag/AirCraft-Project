import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./Redux/Slices/flightSlice";
export default configureStore({
  reducer: {
    flightSlice,
  },
});
