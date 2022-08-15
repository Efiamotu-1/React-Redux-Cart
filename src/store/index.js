import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import uiReducer from './ui-slice'
import cartReducer from './cart-slice'



const store = configureStore({
    reducer : {
        cart : cartReducer,
        ui : uiReducer
    }
});

export default store;