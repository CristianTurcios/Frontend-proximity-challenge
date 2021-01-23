import { Post } from 'redux/interfaces/Post';
import { GET_POSTS, ERROR_POSTS, PostActionTypes } from 'redux/types/PostTypes';

export default (posts: Post[]): PostActionTypes => ({
  type: GET_POSTS,
  payload: posts,
});

export const errorPostsAction = (): PostActionTypes => ({
  type: ERROR_POSTS,
});
