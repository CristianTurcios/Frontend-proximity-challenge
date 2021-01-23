import reducer from './CommentReducer';
import * as types from '../types/CommentTypes';

describe('comments reducer', () => {
  it('should return the state when an error happen', () => {
    expect(reducer(undefined, { type: types.ERROR_COMMENTS })).toEqual(
      {
        data: [],
        loading: false,
        error: true,
      },
    );
  });
});
