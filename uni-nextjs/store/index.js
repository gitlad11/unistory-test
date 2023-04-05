import { combineReducers } from 'redux'
import user_reducer from './reducers/user_reducer'
export * as userActions from './actions/user_action'
export * as bookActions from './actions/book_action'
import book_reducer from './reducers/book_reducer'

const reducers = combineReducers({
    user: user_reducer,
    books: book_reducer
})

export default reducers;