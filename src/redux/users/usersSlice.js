import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        unFollowing: ({ following }, { payload }) => {
            following.following.filter((user) => user !== payload);
        },
        followingUser: ({ following }, { payload }) => {
            following.push(payload);
        },
    },
});
export const usersReducer = usersSlice.reducer;
export const { unFollowing, followingUser } = usersSlice.actions;
