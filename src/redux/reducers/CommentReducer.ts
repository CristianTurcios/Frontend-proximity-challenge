import {
  GET_COMMENTS,
  ADD_COMMENT,
  ERROR_COMMENTS,
  CommentActionTypes,
  GetCommentsStateType,
} from 'redux/types/CommentTypes';

const initialStateGetComments: GetCommentsStateType = {
  data: [],
  loading: false,
  error: false,
};

export default (state = initialStateGetComments, action: CommentActionTypes): GetCommentsStateType => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case ERROR_COMMENTS:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
