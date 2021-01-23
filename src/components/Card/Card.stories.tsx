import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { text, number } from '@storybook/addon-knobs';
import cardImage from 'assets/images/Artboard-6-100.jpg';
import Card from './Card';

storiesOf('components/Card', module).add(
  'Card', () => (
    <MemoryRouter>
      <main className="mt-5 pt-5">
        <div className="container">
          <section className="text-center">
            <div className="row mb-4 wow fadeIn">
              <div className="col-lg-4 col-md-6 mb-4">
                <Card
                  title={text('Title', 'Card Title', 'Configuration')}
                  body={text('body', 'Card Body', 'Configuration')}
                  id={number('Id', 1, { min: 0 }, 'Configuration')}
                  image={text('Card Image', cardImage, 'Configuration')}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </MemoryRouter>
  ),
);
