import { API_BASE_URL } from '@constants/apiSettings';

import wrapPromise from './wrapPromise';

function fetchData(query: string) {
  const promise = fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((res) => res.data);

  return wrapPromise(promise);
}

export default fetchData;
