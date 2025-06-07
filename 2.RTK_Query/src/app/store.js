
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"; //for enable caching and refetching data
import { productsApi } from "./service/dummyData";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath] : productsApi.reducer, // using productsApi reducer from dummyData.js
        // you can add more reducers here if you have any, like userReducer, cartReducer, etc.
    },
    //just caching 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware), //adding productsApi middleware to the store
});

setupListeners(store.dispatch);