export const reducers = (state, action) => {
    console.log(state, action)
    if (action.type === "MINUS") {
        return {
            ...state,
            count: state.count - 1
        }
    }
    if (action.type === "PLUS") {
        return {
            ...state,
            count: state.count + 1
        }
    }
    return {
        count: 0,
        appVers: 'v1.2.5'
    }
}