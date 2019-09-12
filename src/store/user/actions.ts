import axios from 'axios'
import apiuser from '../../api/user'
export const LOGIN = 'LOGIN'


// redux store action
function login(user:any) {
    return {
        type: LOGIN,
        payload:{user}
    }
}

export function asyncLogin(name:string, pass:string) {
    return (dispatch:any, getState:any) => {
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
                    return
                }
            })
            .catch(err => {
                console.log('login asyncAction err...>', err)
            })
    }
}