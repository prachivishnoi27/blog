import { combineReducers } from "redux";
import postReducer from './postsReducer';
import usersReducers from './usersReducers';

export default combineReducers({
    posts: postReducer,
    users: usersReducers
});