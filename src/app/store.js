import {configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../features/userslice";
 const store =  configureStore ({
    reducer: {
        user: userSliceReducer,
    },
 });
 export default store;