import axios from 'axios'
import apiuser from '../../api/user'
export const LOGIN = 'LOGIN'

// redux store action
function login(user) {
    return {
        type: LOGIN,
        payload:{user}
    }
}

export function asyncLogin(name, pass) {
    return (dispatch, getState) => {
        let geturl =
            apiuser.login.url
                .replace('{name}', name)
                .replace('{pass}', pass)
        axios.get(geturl)
            .then(res => {
                if (res.data.length > 0) {
                    dispatch(login(res.data))
                }
                else {
                    dispatch(login([]))
                }
            })
            .catch(err => {
                console.log('login asyncAction err...>', err)
            })
    }
}