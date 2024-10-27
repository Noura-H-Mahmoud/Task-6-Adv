import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../slice/index";
import modeReducer from "../sliceMode/index";

const store = configureStore({
    reducer:
    {
        article: articleReducer,
        mode: modeReducer,
    }
});
export default store;