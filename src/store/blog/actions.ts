import axios from 'axios';
import apiblog  from '../../api/blog';
import {blogItem,hotsItem} from './modle'

export const UPDATE_BLOG_LIST = 'UPDATE_BLOG_LIST'
export const UPDATE_HOTS = 'UPDATE_HOTS'

// redux store acton
function updateBlogList(blogList:Array<blogItem>) {
    return {
        type: UPDATE_BLOG_LIST,
        payload: {blogList}
    }
}

function hots(hotsList:Array<hotsItem>) {
    return {
        type: UPDATE_HOTS,
        payload:{hotsList}
    }
}

// redux-thunk middleware async function
export function asyncUpdateBlogList() {
    return (dispatch:any, getState:any) => {
        let geturl =
            apiblog.getBlogList.url
                .replace('{pageIndex}', '1')
                .replace('{pageSize}', '10')
        axios.get(geturl)
            .then(res => {
                dispatch(updateBlogList(res.data));
            })
            .catch(err => {
                console.log('ayncAction err ....>', err)
            });
    }
}

export function asyncHotsList() {
    return (dispatch:any, getState:any) => {
        let geturl = apiblog.getHots.url
        axios.get(geturl)
            .then(res => {
                dispatch(hots(res.data));
            })
            .catch(err => {
                console.log('ayncAction err ....>', err)
            });
    }
}
