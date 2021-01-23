import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Copyright caption', () => {
  render(<Footer />);
  const CopyrightCaption = screen.getByText(/© 2021 AutoFi Copyright/i);
  expect(CopyrightCaption).toBeInTheDocument();
});

test('renders AutoFi link in Footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/AutoFi.com/i);
  expect(linkElement.getAttribute('href')).toEqual('https://www.autofi.com/');
});
