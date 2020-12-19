import { useEffect, useState } from 'react';

export const useUser = () => {
  const [state, setState] = useState('');
  const [isUserLoading, setLoading] = useState(true);

  const getuser = async () => {
    const resp = await fetch('/session');

    const data = await resp.json();

    setState(data.username);
    setLoading(false);
  };

  useEffect(() => {
    getuser();
  }, []);

  return { user: state, isUserLoading };
};
