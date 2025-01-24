"use client";

import React from "react";

const ContextualRisk = () => {
  const riskLevels = [
    { id: 1, count: 2, label: "Critical", color: "bg-red-500" },
    { id: 2, count: 0, label: "High", color: "bg-orange-500" },
    { id: 3, count: 0, label: "Medium", color: "bg-yellow-500" },
    { id: 4, count: 0, label: "Low", color: "bg-green-500" },
  ];

  return (
    <div className="h-[260px] w-full rounded-lg bg-white p-6 shadow-md">
      {/* Title */}
      <h2 className="mb-4 text-sm font-medium text-gray-500">
        Contextual Risk
      </h2>

      {/* Risk Levels */}
      <div className="flex items-center justify-between">
        <ul className="space-y-4">
          {riskLevels.map((risk) => (
            <li key={risk.id} className="flex items-center space-x-2">
              <span className={`h-2.5 w-2.5 rounded-full ${risk.color}`}></span>
              <span className="text-sm text-gray-700">
                <span className="font-bold">{risk.count}</span> {risk.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Circle Indicator */}
        <div className="relative flex items-center justify-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-red-700">
            <span className="text-2xl font-medium text-gray-700">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextualRisk;
