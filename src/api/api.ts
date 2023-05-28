import { API_SETTINGS } from '@constants';
import { handleAxiosError, parseJSON } from '@helpers';
import axios from 'axios';

interface QueryDataParams {
  query: string;
  variables: string;
}

const queryData = async ({ query, variables }: QueryDataParams) => {
  try {
    const response = await axios({
      method: 'POST',
      url: API_SETTINGS.API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ query, variables: parseJSON(variables) }),
    });

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export default queryData;
