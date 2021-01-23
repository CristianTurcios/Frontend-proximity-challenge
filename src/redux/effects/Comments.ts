import { Dispatch } from 'redux';
import axios from 'helpers/axios';
import { Comment } from 'redux/interfaces/Comment';
import { CommentActionTypes } from 'redux/types/CommentTypes';
import { addCommentAction, errorCommentsAction, getCommentsAction } from 'redux/actions/CommentAction';

export const getComments = (postId: string) => async (dispatch: Dispatch<CommentActionTypes>) => {
  try {
    const res = await axios.get(`/posts/${postId}/comments`);
    dispatch(getCommentsAction(res.data));
  } catch (err) {
    dispatch(errorCommentsAction());
  }
};

export const addComment = (comment: Comment) => async (dispatch: Dispatch<CommentActionTypes>) => {
  dispatch(addCommentAction(comment));
};
