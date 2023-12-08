import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlicer";

const store=configureStore({reducer:taskReducer})
export default store;
