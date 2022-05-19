import { combineReducers } from "redux";
import auth from './auth_reducers';

const rootReducer = combineReducers({
    auth
})
export default rootReducer;