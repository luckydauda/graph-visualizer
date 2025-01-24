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
    { id: 1, count: 2, label: "Critical", color: "bg-red-500" },
    { id: 2, count: 0, label: "High", color: "" },
    { id: 3, count: 0, label: "Medium", color: "bg-yellow-500" },
    { id: 4, count: 0, label: "Low", color: "bg-green-500" },
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
        { id: 1, count: 0, label: "Critical", color: "bg-red-500" },
        { id: 2, count: 0, label: "High", color: "bg-orange-500" },
        { id: 3, count: 0, label: "Medium", color: "bg-yellow-500" },
        { id: 4, count: 0, label: "Low", color: "bg-green-500" },
      ],
    })),
}));
