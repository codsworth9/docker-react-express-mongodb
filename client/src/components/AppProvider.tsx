import React, {
  createContext,
  useContext,
  FormEvent,
  ChangeEvent,
  useMemo,
} from 'react';
import { useMessages, useUser } from '../hooks';
import { Loading } from './Loading';

export interface Message {
  _id?: string;
  text: string;
  user?: string;
  username?: string;
  __v?: number;
}

interface AppStateInterface {
  messages: Message[];
  handleSubmitMessage: (e: FormEvent<HTMLFormElement>) => void;
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveMessage: (id: string) => void;
  currentMessage: string;
  user: string;
}

export const AppState = createContext<AppStateInterface>(
  {} as AppStateInterface
);

export const AppProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const {
    messages,
    handleSubmitMessage,
    handleMessageChange,
    handleRemoveMessage,
    isMessagesLoading,
    currentMessage,
  } = useMessages();
  const { user, isUserLoading } = useUser();

  const loading = isMessagesLoading && isUserLoading;

  const context = useMemo(
    () => ({
      messages,
      handleSubmitMessage,
      handleMessageChange,
      handleRemoveMessage,
      currentMessage,
      user,
    }),
    [
      messages,
      handleSubmitMessage,
      handleMessageChange,
      handleRemoveMessage,
      currentMessage,
      user,
    ]
  );

  return (
    <AppState.Provider value={context}>
      {loading ? <Loading /> : children}
    </AppState.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppState);
};
