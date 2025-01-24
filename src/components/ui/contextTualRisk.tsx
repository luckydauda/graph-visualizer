"use client";

import React from "react";
import RiskLevelsComponent from "./RiskLevels/RiskLevelsCmponent";

const ContextualRisk = () => {
 

  return (
    <div className="h-[260px] w-full rounded-lg bg-white p-6 shadow-md">
      {/* Title */}
      <h2 className="mb-4 text-sm font-medium text-gray-500">
        Contextual Risk
      </h2>

      {/* Risk Levels */}
      <div className="flex items-center justify-between">
        <RiskLevelsComponent />

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
