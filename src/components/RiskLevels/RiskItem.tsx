// src/components/RiskLevels/RiskItem.tsx
"use client";

import { RiskLevel } from "@/types/RiskLevel";
import React from "react";

const colorMap: { [key: string]: string } = {
  critical: "bg-red-500",
  high: "bg-orange-500",
  medium: "bg-yellow-500",
  low: "bg-green-500",
};

interface RiskItemProps {
  level: RiskLevel;
}

const RiskItem: React.FC<RiskItemProps> = ({ level }) => {
  const colorClass = colorMap[level.label.toLowerCase()] || "bg-gray-500"; // Fallback to gray if label is unrecognized

  return (
    <li className="flex items-center space-x-2">
      <span className={`w-3 h-3 rounded-full ${colorClass}`}></span>
      <span className="text-lg text-gray-500 font-400">
        <span className="font-bold">{level.count}</span> {level.label}
      </span>
    </li>
  );
};

export default RiskItem;
