import { ADD_STATUS, CURRENT_STATUS } from '../types/types'

const initialState = {
    status: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_STATUS:
            return {
                ...state,
                status: action.status
            }
        case CURRENT_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state

    }
}