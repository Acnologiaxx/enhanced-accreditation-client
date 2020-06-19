import { ADDED_PHOTO, LOAD_PHOTO } from '../types/types'

const initialState = {
    id: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_PHOTO:
            return {
                ...state,
                id: action.payload.id
            }
        case ADDED_PHOTO:
            return {
                ...state,
                id: action.payload.id
            }
        default:
            return state;
    }
};