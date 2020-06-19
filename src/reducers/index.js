import { combineReducers } from 'redux'
import authReducer from './authReducer'
import managementReducer from './managementReducer'
import photoReducer from './photoReducer'
import agencyReducer from './agencyReducer'
import statusReducer from './statusReducer'

export default combineReducers({
    auth: authReducer,
    mng: managementReducer,
    photo: photoReducer,
    agency: agencyReducer,
    status: statusReducer
})