import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userInfo: localStorage.getItem ('userInfo') ? JSON.parse (localStorage.getItem('userInfo')) : null
}

const message = {
    userMessage: localStorage.getItem ('userInfo') ? JSON.parse (localStorage.getItem('userInfo')) : JSON.parse (localStorage.getItem('userInfo'))
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    message,
    reducers:{
        setCredentials: (state, action) =>{
            state.userInfo = action.payload;
            localStorage.setItem ('userInfo', JSON.stringify(action.payload))
        },

        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem ('userInfo');
        },
        setMessagex: (state, action) =>{
            state.userMessage = action.payload;
            localStorage.setItem ('userMessage', JSON.stringify(action.payload))
        },

    },
});


export const { setCredentials,setMessagex, logout } = authSlice.actions;

export default authSlice.reducer;