import { combineReducers } from "redux";
import authSlice from "./authSlice";
import {persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

const rootReducer=combineReducers({
    auth: authSlice
})

const persistConfig={
    key:'root',
    storage
}

const persistedReducer=persistReducer(persistConfig, rootReducer);

const store=configureStore({
    reducer: persistedReducer,
    middleware: (buildGetDefaultMiddleware) =>
        buildGetDefaultMiddleware({
            serializableCheck: false,
        })
})

export const persistor =persistStore(store);
export default store;

