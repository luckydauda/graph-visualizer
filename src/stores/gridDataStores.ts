// src/stores/gridDataStore.ts
import { create } from "zustand";

interface GridDataStore {
  gridData: string[];
  addGridItem: (item: string) => void;
  removeGridItem: (index: number) => void;
}

export const useGridDataStore = create<GridDataStore>((set) => ({
  gridData: ["1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4"],
  addGridItem: (item) =>
    set((state) => ({
      gridData: [...state.gridData, item],
    })),
  removeGridItem: (index) =>
    set((state) => ({
      gridData: state.gridData.filter((_, i) => i !== index),
    })),
}));
