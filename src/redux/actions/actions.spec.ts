import * as PostTypes from '../types/PostTypes';
import * as CommentTypes from '../types/CommentTypes';

import * as PostActions from './PostActions';
import * as CommentAction from './CommentAction';

describe('actions', () => {
  it('should create an action to notify and Error in Posts', () => {
    const expectedAction = {
      type: PostTypes.ERROR_POSTS,
    };

    expect(PostActions.errorPostsAction()).toEqual(expectedAction);
  });

  it('should create an action to notify and Error in comments', () => {
    const expectedAction = {
      type: CommentTypes.ERROR_COMMENTS,
    };

    expect(CommentAction.errorCommentsAction()).toEqual(expectedAction);
  });
});
