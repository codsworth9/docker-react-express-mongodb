import React from 'react';
import { AppProvider } from './AppProvider';
import { Form } from './Form';
import { Messages } from './Messages';
import { User } from './User';

const App = () => {
  return (
    <AppProvider>
      <User />
      <Form />
      <Messages />
    </AppProvider>
  );
};

export default App;
