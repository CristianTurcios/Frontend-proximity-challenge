import React from 'react';
import { render, screen } from '@testing-library/react';
import userImage from 'assets/images/avatar.png';
import Comment from './Comment';

test('renders user image', () => {
  const props = {
    name: 'John', email: 'john.doe@email.com', body: 'body', userImage,
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  render(<Comment {...props} />);
  const image = screen.getByAltText(/Generic placeholder/i);
  expect(image).toBeInTheDocument();
});
