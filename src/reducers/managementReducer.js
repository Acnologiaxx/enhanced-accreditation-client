import { ALL_USERS, SPECIFIC_USER } from '../types/types'

const initialState = {
    users: [],
    single: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ALL_USERS:
            return {
                ...state,
                users: action.users
            }
        case SPECIFIC_USER:
            return {
                ...state,
                single: action.users
            }
        default:
            return state

    }
}