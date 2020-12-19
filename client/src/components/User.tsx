import React from 'react';
import profileImage from '../img/profile.webp';
import { useAppContext } from './AppProvider';

export const User = () => {
  const { user } = useAppContext();
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <li className="col-span-4 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src={profileImage}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {user}
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
};
