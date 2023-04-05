const book_reducer = (state = [], action) => {
    switch (action.type){
        case "add":
            return state = action.payload;
        case 'remove':
            return state = []
        default:
             return state;
    }
}
export default book_reducer;