import { combineReducers } from "redux";
import auth from './auth_reducers';
import articles from './articles_reducers'
const rootReducer = combineReducers({
    auth,
    articles
})
export default rootReducer;