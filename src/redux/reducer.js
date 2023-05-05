import { combineReducers } from "@reduxjs/toolkit";

import { followersApi } from "./users/followersApi";
import { usersReducer } from "./users/usersSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "users",
    storage,
    whitelist: ["following"],
};
const persistedReducer = persistReducer(persistConfig, usersReducer);

export const reducer = combineReducers({
    users: persistedReducer,
    [followersApi.reducerPath]: followersApi.reducer,
});
