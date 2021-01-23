import * as React from 'react';
import { storiesOf } from '@storybook/react';
import userImage from 'assets/images/avatar.png';
import { text } from '@storybook/addon-knobs';
import Comment from './Comment';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

storiesOf('components/Comment', module).add(
  'Comment', () => (
    <Comment
      name={text('name', 'Cristian Turcios', 'Configuration')}
      email={text('email', 'cturcioscolindres01@gmail.com', 'Configuration')}
      body={text('body', 'Awesome App', 'Configuration')}
      userImage={text('userImage', userImage, 'Configuration')}
    />
  ),
);
