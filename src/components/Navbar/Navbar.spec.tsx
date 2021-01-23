import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

test('renders navbar component in the DOM', () => {
  render(
    <MemoryRouter>
      <Navbar name="AutoFi" />
    </MemoryRouter>,
  );
  const navBarComponent = screen.getByText(/AutoFi/i);
  expect(navBarComponent).toBeInTheDocument();
});
