// import React from "react";
import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer:{
        auth:authSlice,
        //TO DO: add more slices here for posts
    }
});

export default store;