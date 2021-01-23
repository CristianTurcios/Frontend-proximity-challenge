import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type CardProps = {
  id: number;
  title: string;
  body: string;
  image: string;
}

const Card: FC<CardProps> = (props) => {
  const {
    id, title, body, image,
  } = props;

  return (
    <div className="card">
      <div className="view overlay">
        <img
          src={image}
          className="card-img-top"
          alt="card"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{body}</p>
        <Link className="btn btn-primary btn-md" to={`/post/${id}`}>Read More</Link>
      </div>
    </div>
  );
};
export default Card;
