import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/Car/CarSlice"

 const store = configureStore({
    reducer:{
        car:carReducer
    }
});

export default store