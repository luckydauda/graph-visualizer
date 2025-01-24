// src/components/RiskLevels/RiskItem.tsx
"use client"

import { RiskLevel } from "@/types/RiskLevel";
import React from "react";


interface RiskItemProps {
  level: RiskLevel;
}

const RiskItem: React.FC<RiskItemProps> = ({ level }) => (
  <li className="flex items-center space-x-2">
    <span className={`w-3 h-3 rounded-full ${level.color}`}></span>
    <span className="text-sm text-gray-700">
      <span className="font-bold">{level.count}</span> {level.label}
    </span>
  </li>
);

export default RiskItem;
