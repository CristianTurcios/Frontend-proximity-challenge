import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

type CommentProps = {
  name: string;
  email: string;
  body: string;
  userImage: string;
}

const Comment: FC<CommentProps> = (props) => {
  const {
    name, email, body, userImage,
  } = props;

  return (
    <div className="media d-block d-md-flex mt-3">
      <img
        className="d-flex mb-3 mx-auto z-depth-1"
        src={userImage}
        alt="Generic placeholder"
        style={{ width: '100px' }}
      />
      <div className="media-body text-center text-md-left ml-md-3 ml-0">
        <h5 className="mt-0 font-weight-bold">
          {name}
          {' '}
          <a href={`mailto:${email}`} className="pull-right">
            <i><FontAwesomeIcon icon={faMailBulk} /></i>
          </a>
        </h5>
        {body}
      </div>
    </div>
  );
};
export default Comment;
