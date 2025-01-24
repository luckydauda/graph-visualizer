// src/hooks/useRiskLevels.ts
"use client"

import { useRiskLevelStore } from "../stores/riskLevelStore";

export const useRiskLevels = () => {
  const riskLevels = useRiskLevelStore((state) => state.riskLevels);
  const updateRiskLevel = useRiskLevelStore((state) => state.updateRiskLevel);
  const resetRiskLevels = useRiskLevelStore((state) => state.resetRiskLevels);

  return { riskLevels, updateRiskLevel, resetRiskLevels };
};
