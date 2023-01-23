import { createSlice } from "@reduxjs/toolkit";
/* createSlice adalah sebuah function dari redux, dimana pada function ini terdapat initialstate,
reducer, kemudian akan membuat action creator dan action type secara otomatis */
export const globalSlice = createSlice({
    name : "global",
    initialState: {
        mode:"dark",
        userId:"63701cc1f03239b7f700000e"
    },
    reducers: { 
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }

    /* 
    reducer yang akan terbuat otomatis dan mengambil seluruh function dalam object reducers
    reducer: (state, action) => {
    switch (action.type) {
    case "global/setMode":
    return reducers.setMode(state, action.payload);
     default:
    return state;
         }
    
    */
    
}) 

export const {setMode} = globalSlice.actions;
export default globalSlice.reducer;