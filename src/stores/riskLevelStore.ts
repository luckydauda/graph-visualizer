"use client"

// src/stores/riskLevelStore.ts
import { create } from "zustand";
import { RiskLevel } from "../types/RiskLevel";

interface RiskLevelStore {
  riskLevels: RiskLevel[];
  updateRiskLevel: (id: number, count: number) => void;
  resetRiskLevels: () => void;
}

export const useRiskLevelStore = create<RiskLevelStore>((set) => ({
  riskLevels: [
    { id: 1, count: 2, label: "Critical" },
    { id: 2, count: 0, label: "High", },
    { id: 3, count: 0, label: "Medium" },
    { id: 4, count: 0, label: "Low" },
  ],
  updateRiskLevel: (id, count) =>
    set((state) => ({
      riskLevels: state.riskLevels.map((level) =>
        level.id === id ? { ...level, count } : level
      ),
    })),
  resetRiskLevels: () =>
    set(() => ({
      riskLevels: [
        { id: 1, count: 0, label: "Critical" },
        { id: 2, count: 0, label: "High",  },
        { id: 3, count: 0, label: "Medium" },
        { id: 4, count: 0, label: "Low" },
      ],
    })),
}));
