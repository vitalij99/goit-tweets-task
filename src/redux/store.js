import { configureStore } from "@reduxjs/toolkit";
import { followersApi } from "./users/followersApi";
import { reducer } from "./reducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersReducer } from "./users/usersSlice";

const persistConfig = {
    key: "users",
    storage,
    whitelist: ["following"],
};
const persistedReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
    reducer: {
        users: persistedReducer,
        [followersApi.reducerPath]: followersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(followersApi.middleware),
});

export const persistor = persistStore(store);
