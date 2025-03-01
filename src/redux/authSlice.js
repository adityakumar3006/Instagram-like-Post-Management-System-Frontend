import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

export const registerUser = createAsyncThunk("auth/register", async (userData) => {
    await axios.post(`${API_URL}register`, userData);
});

export const loginUser = createAsyncThunk("auth/login", async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData);
    localStorage.setItem("token", response.data.token);
    return response.data;
});

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: localStorage.getItem("token") || null },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
