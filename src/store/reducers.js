import { combineReducers } from 'redux';
import { UPDATE_BLOG_LIST } from './actions';

let initialState = {
    data: [
        {
            _id: '74',
            name: 'test-blog-Jason'
        }
    ]
}

function blogList(state = initialState, action) {
    switch (action.type) {
        case UPDATE_BLOG_LIST:
            return action.blogList;
        default:
            return state;
    }
}

const store = combineReducers({
    blogList
})

export default store;