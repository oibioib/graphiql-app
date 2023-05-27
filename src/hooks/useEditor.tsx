import { useEffect, useMemo } from 'react';

import queryData from '@api/api';
import { showNotificationsError } from '@helpers';
import { useStoreQuery } from '@store';
import { useMutation } from '@tanstack/react-query';

const useEditor = () => {
  const query = useStoreQuery((state) => state.query);
  const setQuery = useStoreQuery((state) => state.setQuery);
  const { data, isLoading, isError, mutate } = useMutation({ mutationFn: queryData });

  const code = useMemo(() => {
    if (typeof data === 'string') return data;
    if (!data) return '';
    return JSON.stringify(data, null, ' ');
  }, [data]);

  useEffect(() => {
    if (isError) showNotificationsError('something');
  }, [isError]);

  const onMutate = () => {
    mutate(query);
  };

  return { query, setQuery, code, onMutate, isLoading };
};

export default useEditor;
