import { API_SETTINGS } from '@constants';
import { create } from 'zustand';

type StoreVariables = {
  storeVariables: string;
  setStoreVariables: (newVariables: string) => void;
};

const useStoreVariables = create<StoreVariables>((set) => ({
  storeVariables: API_SETTINGS.DEFAULT_VARIABLES,
  setStoreVariables: (newVariables) => set(() => ({ storeVariables: newVariables })),
}));

export default useStoreVariables;
