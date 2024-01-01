import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    forumEntities: [],
    isLoading: false,
}
const forumSlice = createSlice({
    name: 'forum',
    initialState, 
    reducers: {
        fetchForumRequest: (state) => {
            state.isLoading = true;
        },
        fetchForumSuccess: (state, action) => {
            state.forumEntities = action.payload;
            state.isLoading = false;
        },
        addForumPostRequest: (state) => {
            state.isLoading = true;
        }

    }
})

export const { fetchForumRequest, fetchForumSuccess, addForumPostRequest } = forumSlice.actions;

export default forumSlice.reducer;

