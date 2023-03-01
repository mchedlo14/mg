import { createSlice } from "@reduxjs/toolkit";

export const authReduxSlice = createSlice({
    name: "authRedux",
    initialState: {
        registerSuccess: false,
    },
    reducers: {
        setRegisterSuccess: (state, action) => {
            state.registerSuccess = action.payload;
        },
    },
});

export const { setRegisterSuccess } = authReduxSlice.actions;
export default authReduxSlice.reducer;
