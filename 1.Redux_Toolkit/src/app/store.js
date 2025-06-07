import { configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

const store = configureStore({
    reducer : counterReducer,
    // if you have multiple reducers, you can use the following format as an object, 
    // reducer: {
//     counter: counterReducer,
//   },
})

export default store;