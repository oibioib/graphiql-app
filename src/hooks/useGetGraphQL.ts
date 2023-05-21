import { useEffect, useState } from 'react';

import { API_BASE_URL } from '@constants/apiSettings';

const useGetGraphQL = (query: string) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const getQuery = async (query: string) => {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw Error('Failed to fetch schema');
      }

      const data = await response.json();
      setResult(data);
    };

    try {
      getQuery(query);
    } catch (err) {
      console.error(err);
    }
  }, [query]);

  return { result };
};

export default useGetGraphQL;
