import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import authStore from "../api/auth/store";

const rootReducer = combineReducers({
    ...authStore,
});

export const store = configureStore({
    reducer: rootReducer,
});
