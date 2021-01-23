import { Comment } from 'redux/interfaces/Comment';

export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';
export const ERROR_COMMENTS = 'ERROR_COMMENTS';

export interface GetCommentsStateType {
    data: Comment[];
    loading: boolean;
    error: boolean;
}

interface GetCommentsActionType {
    type: typeof GET_COMMENTS;
    payload: Comment[];
}

interface AddCommentActionType {
    type: typeof ADD_COMMENT;
    payload: Comment;
}

interface ErrorCommentsActionType {
    type: typeof ERROR_COMMENTS;
}

export type CommentActionTypes = GetCommentsActionType | AddCommentActionType | ErrorCommentsActionType;
