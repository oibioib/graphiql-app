import { useEffect, useMemo } from 'react';

import queryData from '@api/api';
import { showNotificationsError } from '@helpers';
import { useStoreQuery, useStoreVariables } from '@store';
import { useMutation } from '@tanstack/react-query';

const useEditor = () => {
  const storeQuery = useStoreQuery((state) => state.storeQuery);
  const setStoreQuery = useStoreQuery((state) => state.setStoreQuery);

  const storeVariables = useStoreVariables((state) => state.storeVariables);
  const setStoreVariables = useStoreVariables((state) => state.setStoreVariables);

  const { data, isLoading, isError, mutate } = useMutation({ mutationFn: queryData });

  const code = useMemo(() => {
    if (typeof data === 'string') return data;
    if (!data) return '';
    return JSON.stringify(data, null, ' ');
  }, [data]);

  useEffect(() => {
    if (isError) showNotificationsError('Something went wrong');
  }, [isError]);

  const onMutate = () => {
    mutate({
      query: storeQuery,
      variables: storeVariables,
    });
  };

  return {
    storeQuery,
    setStoreQuery,
    storeVariables,
    setStoreVariables,
    code,
    onMutate,
    isLoading,
  };
};

export default useEditor;
