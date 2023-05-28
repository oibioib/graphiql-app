import { API_SETTINGS } from '@constants';
import { create } from 'zustand';

type StoreQuery = {
  storeQuery: string;
  setStoreQuery: (query: string) => void;
};

const useStoreQuery = create<StoreQuery>((set) => ({
  storeQuery: API_SETTINGS.DEFAULT_QUERY,
  setStoreQuery: (newQuery) => set(() => ({ storeQuery: newQuery })),
}));

export default useStoreQuery;
