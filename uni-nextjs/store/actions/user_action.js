export const addUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: user
        })
    }
}

export const removeUser = () => {
    return (dispatch) => {
        dispatch({
            type: 'remove',
            payload: {}
        })
    }
}