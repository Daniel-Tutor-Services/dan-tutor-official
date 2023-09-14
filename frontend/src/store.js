import authReducer from './slices/authSlice.js';
import { apiSlice } from './slices/apiSlice.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(apiSlice.middleware),
    devTools: true
});

export default store;