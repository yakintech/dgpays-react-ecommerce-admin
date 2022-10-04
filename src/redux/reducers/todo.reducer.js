
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload ]
        case 'REMOVE_TODO':
            return state.filter(q => q.id != action.payload)
        case 'REMOVE_ALL':
            return []
        default:
            return state;
    }


}