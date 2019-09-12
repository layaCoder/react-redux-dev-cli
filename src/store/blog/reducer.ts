import { UPDATE_BLOG_LIST } from './actions';
import { UPDATE_HOTS } from './actions'
import { blogItem, hotsItem } from './modle'


let initalBlogList: Array<blogItem> = [{
    _id: '',
    avatarUrl: '',
    date: '',
    diyTags: [],
    htmlDom: '',
    likes: [],
    replys: [],
    tags: [],
    test: '',
    title: '',
    user: ''
}]

let initalHots: Array<hotsItem> = [{
    _id: '',
    sizeOfLikes: 0,
    title: '',
    date: ''
}]

function blogList(state = initalBlogList, action: any): Array<blogItem> {
    switch (action.type) {
        case UPDATE_BLOG_LIST:
            return action.payload.blogList;
        default:
            return state;
    }
}

function hots(state = initalHots, action: any): Array<hotsItem> {
    switch (action.type) {
        case UPDATE_HOTS:
            return action.payload.hotsList;
        default:
            return state
    }
}

export default { blogList, hots }