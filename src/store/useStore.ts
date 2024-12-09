import create from 'zustand';
import { persist } from 'zustand/middleware';

interface Store {
  apiKey: string;
  keywords: string[];
  setApiKey: (key: string) => void;
  addKeyword: (keyword: string) => void;
  removeKeyword: (keyword: string) => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      apiKey: '',
      keywords: [],
      setApiKey: (key) => set({ apiKey: key }),
      addKeyword: (keyword) =>
        set((state) => ({
          keywords: [...new Set([...state.keywords, keyword])],
        })),
      removeKeyword: (keyword) =>
        set((state) => ({
          keywords: state.keywords.filter((k) => k !== keyword),
        })),
    }),
    {
      name: 'etsy-tracker-storage',
    }
  )
);