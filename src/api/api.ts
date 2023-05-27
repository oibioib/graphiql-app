import { API_SETTINGS } from '@constants';
import axios from 'axios';

const queryData = async (query: string) => {
  const response = await axios({
    method: 'POST',
    url: API_SETTINGS.API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({ query }),
  });

  return response.data;
};

export default queryData;
