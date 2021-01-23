/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import cardImage from 'assets/images/Artboard-6-100.jpg';
import Card from './Card';

test('renders card component', () => {
  const props = {
    id: 1,
    title: 'title',
    body: 'body',
    image: cardImage,
  };

  render(
    <MemoryRouter>
      <Card {...props} />
    </MemoryRouter>,
  );
  const image = screen.getByAltText(/card/i);
  expect(image).toBeInTheDocument();
});

test('renders card image in the component', () => {
  const props = {
    id: 1,
    title: 'title',
    body: 'body',
    image: cardImage,
  };

  render(
    <MemoryRouter>
      <Card {...props} />
    </MemoryRouter>,
  );
  const image = screen.getByAltText(/card/i);
  expect(image.getAttribute('src')).toEqual('Artboard-6-100.jpg');
});
