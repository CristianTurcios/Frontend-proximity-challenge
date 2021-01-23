import { combineReducers } from 'redux';
import getPostsReducer from './PostReducer';
import getCommentsReducer from './CommentReducer';

const rootReducer = combineReducers({
  posts: getPostsReducer,
  comments: getCommentsReducer,
});

export default rootReducer;
