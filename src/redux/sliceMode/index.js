import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
};
export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        // for mode
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
        },
    }
});
// selector to mode
export const selectTheme = (state) => state.mode.darkMode;

export const { toggleTheme } = modeSlice.actions;
export default modeSlice.reducer;