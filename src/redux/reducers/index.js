import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { todoReducer } from "./todo.reducer";


export const mainReducer = combineReducers({
    todoReducer,
    counterReducer
})