import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from 'views/Post';

type CommentFormProps = {
  onSubmit(data: FormData): void
}

const CommentForm: FC<CommentFormProps> = (props) => {
  const { onSubmit } = props;
  const [message, setMessage] = useState<string>('Post');
  const { register, handleSubmit, errors } = useForm<FormData>({ mode: 'onBlur' });

  const preSubmit = async (data: FormData, event: any) => {
    event.target.reset();
    onSubmit(data);
    setMessage('Posted 😊');
    setTimeout(() => setMessage('Post'), 1000);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card mb-3 wow fadeIn">
        <div className="card-header font-weight-bold">Leave a comment</div>
        <div className="card-body">
          <form action="" onSubmit={handleSubmit(preSubmit)}>
            <div className="form-group">
              <label htmlFor="replyFormComment">* Your comment</label>
              <textarea
                className={`form-control ${errors.body && 'is-invalid'}`}
                id="replyFormComment"
                rows={5}
                placeholder="Comment..."
                ref={register({ required: 'Please introduce your comment' })}
                name="body"
              />
              {errors.body && <div className="invalid-feedback">{errors.body.message}</div>}
            </div>
            <label htmlFor="replyFormName">* Your name</label>
            <input
              type="text"
              id="replyFormName"
              className={`form-control ${errors.name && 'is-invalid'}`}
              placeholder="John Doe"
              ref={register({ required: 'Please introduce your name' })}
              name="name"
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}

            <br />
            <label htmlFor="replyFormEmail">* Your e-mail</label>
            <input
              type="text"
              id="replyFormName"
              className={`form-control ${errors.email && 'is-invalid'}`}
              placeholder="john.doe@email.com"
              ref={register({
                required: 'Please introduce your email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid Email Format',
                },
              })}
              name="email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            <div className="text-center mt-4">
              <button className="btn btn-info btn-md" type="submit">{message}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
