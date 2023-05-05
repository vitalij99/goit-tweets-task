import { configureStore } from "@reduxjs/toolkit";
import { followersApi } from "./users/followersApi";
import { reducer } from "./reducer";

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(followersApi.middleware),
});
