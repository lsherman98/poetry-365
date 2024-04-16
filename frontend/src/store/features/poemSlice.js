import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    poems: [],
    selectedPoem: {}
};

export const getPoems = createAsyncThunk("poems/getPoems", () => {
    return fetch("http://localhost:4000/poems")
        .then((res) => res.json())
        .catch((err) => console.log(err));
});

export const getPoem = createAsyncThunk("poems/getPoem", (id) => {
    return fetch(`http://localhost:4000/poems/${id}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
});

export const getPoemByDay = createAsyncThunk("poems/getPoem", (day) => {
    return fetch(`http://localhost:4000/poems/day/${day}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
});

export const getDailyPoem = createAsyncThunk("poems/getDailyPoem" , () => {
        return fetch(`http://localhost:4000/poems/today`)
            .then((res) => res.json())
            .catch((err) => console.log(err));
})

const poemSlice = createSlice({
    name: "poems",
    initialState,
    reducers: {},
    extraReducers: {
        [getPoems.fulfilled]: (state, action) => {
            state.poems = action.payload;
        },
        [getPoem.fulfilled]: (state, action) => {
            state.selectedPoem = action.payload;
        },
        [getDailyPoem.fulfilled]: (state, action) => {
            state.selectedPoem = action.payload;
        },
        [getPoemByDay.fulfilled]: (state, action) => {
            state.selectedPoem = action.payload;
        },
    },
});

export default poemSlice.reducer;
