import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import themeReducer from "./themeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
