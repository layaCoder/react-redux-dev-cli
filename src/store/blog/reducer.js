import { UPDATE_BLOG_LIST } from './actions';
import { UPDATE_HOTS } from './actions'

let initalBlogList = [{
    _id: '74',
    name: 'test-blog-Jason'
}]

let initalHots = [{
    _id: '000',
    name: 'hots'
}]

function blogList(state = initalBlogList, action) {
    switch (action.type) {
        case UPDATE_BLOG_LIST:
            return action.payload.blogList;
        default:
            return state;
    }
}

function hots(state = initalHots, action) {
    switch (action.type) {
        case UPDATE_HOTS:
            return action.payload.hotsList;
        default:
            return state
    }
}

export default { blogList, hots }