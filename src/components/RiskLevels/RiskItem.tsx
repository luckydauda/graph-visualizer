// src/components/RiskLevels/RiskItem.tsx
"use client";

import React from "react";
import { RiskLevel } from "@/types/RiskLevel";

const colorMap: Record<"critical" | "high" | "medium" | "low", string> = {
  critical: "bg-red-500",
  high: "bg-orange-500",
  medium: "bg-yellow-500",
  low: "bg-green-500",
};


interface RiskItemProps {
  level: RiskLevel;
}

const RiskItem: React.FC<RiskItemProps> = ({ level }) => {
  // Ensure case-insensitivity and fallback
  const colorClass = colorMap[level.label.toLowerCase() as keyof typeof colorMap] ?? "bg-gray-500";


  return (
    <li className="flex items-center space-x-2">
      {/* Color Indicator */}
      <span className={`w-3 h-3 rounded-full ${colorClass}`}></span>

      {/* Risk Label and Count */}
      <span className="text-lg text-gray-500 font-light">
        <span className="font-semibold">{level.count}</span> {level.label}
      </span>
    </li>
  );
};

export default RiskItem;
