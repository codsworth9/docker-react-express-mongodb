import {
  useEffect,
  useState,
  FormEvent,
  ChangeEvent,
  useCallback,
} from 'react';

export const useMessages = () => {
  const [state, setState] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isMessagesLoading, setLoading] = useState(true);

  const getMessages = async () => {
    const resp = await fetch('/messages');

    const data = await resp.json();

    setState(data);
    setLoading(false);
  };

  const submitMessage = async (text: string) => {
    await fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
  };

  const handleSubmitMessage = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await submitMessage(currentMessage);
    await getMessages();
    setCurrentMessage('');
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCurrentMessage(e.target.value);

  const handleRemoveMessage = useCallback(async (id) => {
    await fetch(`/messages/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await getMessages();
  }, []);

  useEffect(() => {
    getMessages();
  }, []);

  return {
    messages: state,
    getMessages,
    submitMessage,
    isMessagesLoading,
    handleSubmitMessage,
    handleMessageChange,
    currentMessage,
    handleRemoveMessage,
  };
};
