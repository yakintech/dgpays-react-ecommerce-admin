import { ADD_TODO, CHANGE_STATUS, REMOVE_ALL, REMOVE_TODO } from "../const/actionTypes"



export const addToDoAction = (data) => {

    return {
        type: ADD_TODO,
        payload: data
    }

}

export const removeToDoAction = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const removeAllToDoAction = () => {
    return {
        type: REMOVE_ALL
    }
}

export const changeStatusAction = (id) => {
    return {
        type: CHANGE_STATUS,
        payload: id
    }
} 