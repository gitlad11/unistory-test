export const addBook = (books) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: books
        })
    }
}

export const removeBook = () => {
    return (dispatch) => {
        dispatch({
            type: 'remove',
            payload: []
        })
    }
}