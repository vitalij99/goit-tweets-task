import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../users/taskSlice";

export const store = configureStore({
    reducer: {
        task: taskReducer,
    },
});
