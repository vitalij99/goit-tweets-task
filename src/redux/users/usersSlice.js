import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        unfollowingUser: (state, { payload }) => {
            state.following = state.following.filter(
                (user) => user !== payload
            );
        },
        followingUser: ({ following }, { payload }) => {
            following.push(payload);
        },
    },
});
export const usersReducer = usersSlice.reducer;
export const { unfollowingUser, followingUser } = usersSlice.actions;
