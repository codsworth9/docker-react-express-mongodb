import React from 'react';
import { render } from '@testing-library/react';

import { MessagesItem } from '../MessagesItem';

const props = {
  text: 'This is a text message',
  username: 'user1',
};

it('renders with default props', () => {
  const { container } = render(<MessagesItem {...props} />);

  expect(container.innerHTML).toMatch('user1');

  expect(container.innerHTML).toMatch('This is a text message');
});
