import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import authStore from "../api/auth/store";
import authReduxStore from "../redux/client/auth/store";

const rootReducer = combineReducers({
    ...authStore,
    ...authReduxStore,
});

export const store = configureStore({
    reducer: rootReducer,
});
