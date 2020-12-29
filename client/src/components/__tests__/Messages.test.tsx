import React from 'react';
import { render } from '@testing-library/react';

import { Messages } from '../Messages';

jest.mock('../AppProvider', () => ({
  useAppContext: () => ({
    messages: [
      {
        text: 'This is a text message',
        username: 'user1',
        _id: '1',
      },
      {
        text: 'This is a text',
        username: 'user1',
        _id: '2',
      },
      {
        text: 'This is another text',
        username: 'user1',
        _id: '3',
      },
    ],
  }),
}));

it('renders the right amount of rows', () => {
  const { getByTestId } = render(<Messages />);

  const tableBody = getByTestId('tableBody');

  expect(tableBody.childElementCount).toEqual(3);
});
