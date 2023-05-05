import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createFilter: (state, action) => {
            state = state;
        },
    },
});
export const usersReducer = usersSlice.reducer;
