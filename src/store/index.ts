import blogReducer from './blog/reducer'
import userReducer from './user/reducer'
import { combineReducers } from 'redux';
import { reducer as forms } from 'redux-form';


const store = combineReducers({
    // blog reducer
    blogList: blogReducer.blogList,
    hots: blogReducer.hots,
    // user reducer
    login: userReducer.login,
    // redux-form reducer
    form: forms
})

export default store