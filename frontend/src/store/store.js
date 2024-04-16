import { configureStore } from "@reduxjs/toolkit";
import poemsReducer from "./features/poemSlice";

export const store = configureStore({
    reducer: {
        poemStore: poemsReducer,
    },
});
