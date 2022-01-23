import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "@/features/SwipeableTemporaryDrawer/STDSlice";

export default configureStore({
  reducer: {
    toggleDrawer: toggleReducer,
  },
});
