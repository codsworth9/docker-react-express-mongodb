import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import { MessagesItem } from '../MessagesItem';

afterEach(cleanup);

const props = {
  text: 'This is a text message',
  username: 'user1',
};

it('renders with default props', () => {
  render(<MessagesItem {...props} />);

  expect(screen.getByText('user1')).toBeInTheDocument();

  //prettier-ignore
  expect(screen.getByText('This is a text message')).toBeInTheDocument();
});
