import { ALL_AGENCY, SPECIFIC_AGENCY, ADD_AGENCY } from '../types/types'

const initialState = {
    agencies: [],
    agency: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_AGENCY:
            return {
                ...state,
                agency: action.agency
            }
        case ALL_AGENCY:
            return {
                ...state,
                agencies: action.agency
            }
        case SPECIFIC_AGENCY:
            return {
                ...state,
                single: action.agency
            }
        default:
            return state

    }
}