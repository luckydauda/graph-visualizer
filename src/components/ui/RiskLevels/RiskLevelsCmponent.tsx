// src/components/RiskLevels/RiskLevelsComponent.tsx
"use client"

import React from "react";

import RiskItem from "./RiskItem";
import { useRiskLevels } from "@/hooks/useRiskLevels";

const RiskLevelsComponent = () => {
  const { riskLevels, updateRiskLevel } = useRiskLevels();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Risk Levels</h2>
      <ul className="space-y-4">
        {riskLevels.map((level) => (
          <RiskItem key={level.id} level={level} />
        ))}
      </ul>
    </div>
  );
};

export default RiskLevelsComponent;
