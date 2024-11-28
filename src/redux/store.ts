import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/authReducer";

const store = configureStore({
    reducer: {
        authReducer
    }
})

export default store