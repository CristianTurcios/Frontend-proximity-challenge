import { Post } from 'redux/interfaces/Post';

export const ERROR_POSTS = 'ERROR_POSTS';
export const GET_POSTS = 'GET_POSTS';

export interface GetPostsStateType {
    data: Post[];
    loading: boolean;
    error: boolean;
}

interface GetPostsActionType {
    type: typeof GET_POSTS;
    payload: Post[];
}

interface ErrorPostsActionType {
    type: typeof ERROR_POSTS;
}

export type PostActionTypes = GetPostsActionType | ErrorPostsActionType;
