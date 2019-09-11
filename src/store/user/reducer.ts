import { LOGIN } from './actions'

let loginState = [{
    login: false,
    name: ''
}]

function login(state = loginState, action:any) {
    switch (action.type) {
        case LOGIN:
            return action.payload.user
        default:
            return state
    }
}
export default { login }