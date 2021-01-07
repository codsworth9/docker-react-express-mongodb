import React, { FC } from 'react';
import { useAppContext } from './AppProvider';
import { Message } from '../components/AppProvider';

export const MessagesItem: FC<Message> = ({
  text = '',
  username = '',
  _id = '',
}) => {
  const { handleRemoveMessage } = useAppContext();
  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-36">
        {username}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-full">
        {text}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex">
        <button onClick={() => handleRemoveMessage(_id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-indigo-600 hover:text-indigo-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};
