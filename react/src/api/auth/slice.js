import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
    authLogin,
    loadUser,
    // checkAuth,
    // logout,
    // loadAllUser,
    signUp,
    logout,
} from "./actions";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        userInfo: {},
        userToken: null,
        allUserInfo: {},
    },
    extraReducers: (builder) => {
        //// // // // // // //  LOGIN  // // // // // // // //

        builder.addCase(authLogin.pending, (state, action) => {
            state.isAuthenticated = false;
            state.userToken = null;
        });
        builder.addCase(authLogin.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.userToken = action.payload.token;
            state.userInfo = action.payload.user;
            Cookies.set("authTokens", action.payload.token.access_token);
        });
        builder.addCase(authLogin.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.userToken = null;
        });

        //// // // // // // //  SIGNUP  // // // // // // // //

        builder.addCase(signUp.pending, (state, action) => {
            state.isAuthenticated = false;
            state.userToken = null;
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.userToken = action.payload;
            Cookies.set("authTokens", action.payload.access_token);
        });
        builder.addCase(signUp.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.userToken = null;
        });

        //// // // // // // //  loadUser  // // // // // // // //

        builder.addCase(loadUser.pending, (state, action) => {
            state.userInfo = null;
            state.isAuthenticated = false;
        });
        builder.addCase(loadUser.fulfilled, (state, action) => {
            state.userInfo = action.payload;
            state.isAuthenticated = true;
        });
        builder.addCase(loadUser.rejected, (state, action) => {
            state.userInfo = null;
            state.isAuthenticated = false;
        });

        // builder.addCase(loadAllUser.pending, (state, action) => {
        //     state.allUserInfo = null;
        // });
        // builder.addCase(loadAllUser.fulfilled, (state, action) => {
        //     state.allUserInfo = action.payload;
        // });
        // builder.addCase(loadAllUser.rejected, (state, action) => {
        //     state.allUserInfo = null;
        // });

        // builder.addCase(checkAuth.pending, (state, action) => {
        //     // state.isAuthenticated = false;
        // });
        // builder.addCase(checkAuth.fulfilled, (state, action) => {
        //     state.isAuthenticated = true;
        // });
        // builder.addCase(checkAuth.rejected, (state, action) => {
        //     state.isAuthenticated = false;
        //     localStorage.setItem("blob", "false");
        // });

        //// // // // // // //  logout  // // // // // // // //

        builder.addCase(logout.pending, (state, action) => {});
        builder.addCase(logout.fulfilled, (state, action) => {
            state.isAuthenticated = false;
        });
        builder.addCase(logout.rejected, (state, action) => {});
    },
});

export default authSlice.reducer;
export const selectAuth = (state) => state.auth;
