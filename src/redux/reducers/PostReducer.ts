import {
  GET_POSTS,
  ERROR_POSTS,
  PostActionTypes,
  GetPostsStateType,
} from 'redux/types/PostTypes';

const initialStateGetPosts: GetPostsStateType = {
  data: [],
  loading: true,
  error: false,
};

export default (state = initialStateGetPosts, action: PostActionTypes): GetPostsStateType => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case ERROR_POSTS:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
