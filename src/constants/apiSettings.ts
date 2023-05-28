export const API_BASE_URL = 'https://countries.trevorblades.com/graphql';

export const DEFAULT_QUERY = `query Country($code: ID!) {
  country(code: $code) {
    name
  }
}`;

export const DEFAULT_VARIABLES = `{
  "code": "AE"
}`;
