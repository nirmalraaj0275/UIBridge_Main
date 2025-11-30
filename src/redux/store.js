import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./slices/mailSlice";
import blogReducer from "./slices/blogSlice";
import adminAuthReducer from "./slices/adminAuthSlice";
import dashboardReducer from "./slices/dashboardSlices";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    blogs: blogReducer,
     adminAuth: adminAuthReducer,
     dashboard: dashboardReducer,
  },
});
