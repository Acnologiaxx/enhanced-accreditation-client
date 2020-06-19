import { FETCH_USER, REGISTER_USER, LOGIN_USER } from '../types/types'

const defaultStateValue = {
    authenticated: null,
    user: {},
    token: ''
}

export default function (state = defaultStateValue, action) {
    switch(action.type){
        case FETCH_USER:
            if(action.payload){
                return {
                    ...state,
                    user: action.payload.user,
                    token: action.payload.token,
                    authenticated: true
                }
            }
            return { 
                ...state,
                authenticated: false 
            }
        case REGISTER_USER:
            return { 
                authenticated: false,
                error: action.payload.error
             }
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                authenticated: true
            }
        default:
            return state
    }
}