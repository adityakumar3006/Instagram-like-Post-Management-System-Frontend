import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/posts/";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const createPost = createAsyncThunk("posts/createPost", async (formData, { getState }) => {
    const token = getState().auth.token;
    const response = await axios.post(API_URL, formData, {
        headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    });
    return response.data;
});

const postSlice = createSlice({
    name: "posts",
    initialState: { posts: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        });
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.posts.push(action.payload);
        });
    },
});

export default postSlice.reducer;
