import { create } from 'zustand';

type StoreQuery = {
  query: string;
  setQuery: (query: string) => void;
};

const defaultQuery = `{
  countries {
    name
  }
}`;

const useStoreQuery = create<StoreQuery>((set) => ({
  query: defaultQuery,
  setQuery: (newQuery) => set(() => ({ query: newQuery })),
}));

export default useStoreQuery;
