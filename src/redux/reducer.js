import { combineReducers } from "@reduxjs/toolkit";

import { followersApi } from "./users/followersApi";
import { usersReducer } from "./users/usersSlice";

export const reducer = combineReducers({
    [followersApi.reducerPath]: followersApi.reducer,
});
