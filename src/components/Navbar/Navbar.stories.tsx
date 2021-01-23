import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { text } from '@storybook/addon-knobs';
import Navbar from './Navbar';

storiesOf('components/Navbar', module).add(
  'Navbar', () => (
    <MemoryRouter>
      <Navbar name={text('name', 'AutoFi', 'Configuration')} />
    </MemoryRouter>
  ),
);
