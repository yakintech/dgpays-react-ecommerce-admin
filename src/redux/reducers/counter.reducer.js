export const counterReducer = (state, action) => {

    if (state == undefined)
        return 0

    switch (action.type) {
        case 'INCREASE':
            return state + 1
        case 'DECREASE':
            return state - 1
        default:
            return state;
    }

}