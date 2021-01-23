import React, { FC, useEffect } from 'react';
import { AppState } from 'redux/store';
import Card from 'components/Card/Card';
import getPosts from 'redux/effects/Posts';
import { Post } from 'redux/interfaces/Post';
import errorImage from 'assets/images/error.jpg';
import { useDispatch, useSelector } from 'react-redux';
import cardImage from 'assets/images/Artboard-6-100.jpg';

const DashboardView: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state: AppState) => state.posts);

  if (posts.error) {
    return (
      <main className="mt-5 pt-5">
        <div className="container">
          <section className="text-center">
            <div className="row mb-4 wow fadeIn">
              <div className="col">
                <h1>Unable to retrieve Posts 😔 </h1>
                <img
                  className="img-fluid"
                  src={errorImage}
                  alt="Generic placeholder"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  if (posts.loading) {
    return (<p>Loading</p>);
  }

  const postItems = posts.data.map((post: Post) => (
    <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
      <Card
        id={post.id}
        title={post.title}
        body={post.body}
        image={cardImage}
      />
    </div>
  ));

  return (
    <main className="mt-5 pt-5">
      <div className="container">
        <section className="text-center">
          <div className="row mb-4 wow fadeIn">
            {
              postItems
            }
          </div>
        </section>
      </div>
    </main>
  );
};

export default DashboardView;
