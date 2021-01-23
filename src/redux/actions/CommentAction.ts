import { Comment } from 'redux/interfaces/Comment';
import {
  GET_COMMENTS, ERROR_COMMENTS, ADD_COMMENT, CommentActionTypes,
} from 'redux/types/CommentTypes';

export const getCommentsAction = (comments: Comment[]): CommentActionTypes => ({
  type: GET_COMMENTS,
  payload: comments,
});

export const addCommentAction = (comment: Comment): CommentActionTypes => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const errorCommentsAction = (): CommentActionTypes => ({
  type: ERROR_COMMENTS,
});
