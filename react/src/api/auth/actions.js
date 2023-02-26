import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { axiosUnAuthorized } from "../../helper/axios";

export const signUp = createAsyncThunk(
    "auth/signUp ",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axiosUnAuthorized.post(
                "auth/users/",
                payload
            );
            return data;
        } catch (err) {
            throw rejectWithValue(err.response.data);
        }
    }
);

export const registerVerification = createAsyncThunk(
    "auth/registerVerification",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axiosUnAuthorized.post(
                "auth/users/activation/",
                {
                    uid: payload.uid,
                    token: payload.token,
                }
            );
            return data;
        } catch (err) {
            throw rejectWithValue(err.response.data);
        }
    }
);

export const authLogin = createAsyncThunk(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axiosUnAuthorized.post("auth/jwt/create/", {
                email: payload.email,
                password: payload.password,
            });
            localStorage.setItem("authTokens", JSON.stringify(data));
            return data;
        } catch (err) {
            throw rejectWithValue(err.response.data);
        }
    }
);

export const loadUser = createAsyncThunk(
    "auth/loadUser",
    async (payload, { rejectWithValue }) => {
        if (localStorage.getItem("authTokens")) {
            try {
                const { data } = await axiosInstance.get("auth/users/me/");
                return data;
            } catch (err) {
                throw rejectWithValue(err.response.data);
            }
        } else {
            console.log("user login failed");
        }
    }
);

export const loadAllUser = createAsyncThunk(
    "auth/loadAllUser",
    async (payload, { rejectWithValue }) => {
        if (localStorage.getItem("authTokens")) {
            try {
                const { data } = await axiosInstance.get("auth/users/");
                return data;
            } catch (err) {
                throw rejectWithValue(err.response.data);
            }
        } else {
            console.log("Something went wrong");
        }
    }
);

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async (payload, { rejectWithValue }) => {
        if (localStorage.getItem("authTokens")) {
            try {
                const authTokens = localStorage.getItem("authTokens")
                    ? JSON.parse(localStorage.getItem("authTokens"))
                    : null;

                const { data } = await axiosUnAuthorized.post(
                    "auth/jwt/verify/",
                    {
                        token: authTokens.access,
                    }
                );

                return data;
            } catch (err) {
                if (err.response.status === 401) {
                    throw rejectWithValue(err.response.statusText);
                } else {
                    throw rejectWithValue(err.response.data);
                }
            }
        } else {
            throw rejectWithValue("Not Activate");
        }
    }
);

export const editUser = createAsyncThunk(
    "auth/editUser",
    async (payload, { rejectWithValue }) => {
        if (localStorage.getItem("authTokens")) {
            try {
                const { data } = await axiosInstance.patch(
                    "auth/users/me/",
                    payload
                );
                return data;
            } catch (err) {
                throw rejectWithValue(err.response.data);
            }
        } else {
            console.log("user login failed");
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (payload, { rejectWithValue }) => {
        try {
            localStorage.removeItem("authTokens");
            localStorage.removeItem("blob");
            return data;
        } catch (err) {
            throw rejectWithValue(err.message);
        }
    }
);
