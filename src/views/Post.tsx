import React, { FC, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { AppState } from 'redux/store';
import { useParams } from 'react-router-dom';
import { Post } from 'redux/interfaces/Post';
import Comment from 'components/Comment/Comment';
import userImage from 'assets/images/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import cardImage from 'assets/images/Artboard-6-100.jpg';
import CommentForm from 'components/CommentForm/CommentForm';
import { Comment as IComment } from 'redux/interfaces/Comment';
import { addComment, getComments } from 'redux/effects/Comments';

interface PostId {
  postId: string;
}

export type FormData = {
  email: string;
  body: string;
  name: string;
};

const PostView: FC = () => {
  const { postId } = useParams<PostId>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch]);

  const posts = useSelector((state: AppState) => state.posts.data);
  const comments = useSelector((state: AppState) => state.comments);
  const post = posts.find((element: Post) => element.id.toString() === postId);

  const onSubmit = async (data: FormData) => {
    const commentData = {
      id: uuid(),
      postId: parseInt(postId, 10),
      ...data,
    };
    dispatch(addComment(commentData));
  };

  if (comments.loading) {
    return (<p>Loading</p>);
  }

  return (
    <main className="mt-5 pt-5">
      <div className="container">
        <section className="mt-4">
          <div className="row">
            <div className="col-md-8 mb-4">
              <div className="card mb-4 wow fadeIn">
                <img
                  src={cardImage}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="card mb-4 wow fadeIn">
                <div className="card-body">
                  <p className="h5 my-4">{post?.title}</p>
                  <p>{post?.body}</p>
                </div>
              </div>

              <div className="card mb-4 wow fadeIn">
                <div className="card-header font-weight-bold">
                  <span>Comments</span>
                </div>

                <div className="card-body">
                  {
                    !comments.error && comments.data.map((comment: IComment) => (
                      <div className="media d-block d-md-flex mt-3" key={comment.id}>
                        <Comment
                          name={comment.name}
                          email={comment.email}
                          body={comment.body}
                          userImage={userImage}
                        />
                      </div>
                    ))
                  }
                  {
                    comments.error && (
                      <div className="media d-block d-md-flex mt-3">
                        <h5 className="mt-0 font-weight-bold">Unable to retrieve comments</h5>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <CommentForm onSubmit={onSubmit} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default PostView;
