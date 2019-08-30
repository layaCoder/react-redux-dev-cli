import axios from 'axios';
import apiblog from '../api/blog'
export const UPDATE_BLOG_LIST = 'UPDATE_BLOG_LIST';

// redux store acton
function updateBlogList(blogList) {
    return {
        type: UPDATE_BLOG_LIST,
        blogList
    }
}

// redux-thunk middleware async function
export function asyncUpdateBlogList() {

    return (dispatch, getState) => {
        let geturl = apiblog.getBlogList.url.replace('{pageIndex}', 1).replace('{pageSize}', 10)
        console.log('url...>', geturl)
        axios.get(geturl)
            .then(data => {
                console.log(data);
                dispatch(updateBlogList(data));
            })
            .catch(err => {
                console.log('ayncAction err ....>', err)
            });
    }
} 
