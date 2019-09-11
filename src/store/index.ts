import blogReducer from './blog/reducer'
import userReducer from './user/reducer'
import { combineReducers } from 'redux';


const store = combineReducers({
    // blog reducer
    blogList: blogReducer.blogList,
    hots:blogReducer.hots,
    // user reducer
    login:userReducer.login
})

export default store