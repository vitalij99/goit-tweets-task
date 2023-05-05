import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const taskSlise = createSlice({
    name: "task",
    initialState,
    reducers: {
        createFilter: (state, action) => {
            state = state;
        },
    },
});
export const taskReducer = taskSlise.reducer;
