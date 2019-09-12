import { LOGIN } from './actions'
import { User } from './modle'


function login(state = new User(), action: any): User {
    switch (action.type) {
        case LOGIN:
            if (action.payload.user
                && action.payload.user instanceof Array
                && action.payload.user.length > 0) {
                let loginUser = new User(
                    action.payload.user[0]._id,
                    true,
                    action.payload.user[0].name,
                    action.payload.user[0].avatarUrl
                );
                return loginUser
            }
        default:
            return state
    }
}

export default { login }