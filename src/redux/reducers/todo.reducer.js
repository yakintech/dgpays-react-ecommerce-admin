import { ADD_TODO, CHANGE_STATUS, REMOVE_ALL, REMOVE_TODO } from "../const/actionTypes";

export const todoReducer = (state = [], action) => {



    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case REMOVE_TODO:
            return state.filter(q => q.id != action.payload)
        case CHANGE_STATUS:
            let todo = state.find(q => q.id == action.payload);
            if (todo)
                todo.completed = !todo.completed;
            return [...state]
        case REMOVE_ALL:
            return []
        default:
            return state;
    }


}