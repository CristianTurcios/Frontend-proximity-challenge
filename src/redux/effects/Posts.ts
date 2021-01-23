import { Dispatch } from 'redux';
import axios from 'helpers/axios';
import getPostsAction, { errorPostsAction } from 'redux/actions/PostActions';
import { PostActionTypes } from 'redux/types/PostTypes';

export default () => async (dispatch: Dispatch<PostActionTypes>) => {
  try {
    const res = await axios.get('/posts');
    dispatch(getPostsAction(res.data));
  } catch (err) {
    dispatch(errorPostsAction());
  }
};
