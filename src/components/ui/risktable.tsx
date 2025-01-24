"use client";

import React from "react";

const RiskTable = () => {
  const data = [
    {
      id: 1,
      name: "Loremipsu02",
      ip: "192.168.1.1",
      risk: "Critical",
    },
    {
      id: 2,
      name: "Loremipsumdo01",
      ip: "192.168.1.2",
      risk: "Critical",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full ">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <td className="text-left text-gray-300 text-[15px] font-400 px-4 py-2">
              Asset
            </td>
            <td className="text-left text-gray-300 text-[15px] font-400 px-4 py-2">
              Contextual Risk
            </td>
          </tr>
          <tr className="border-b" />
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="flex items-center space-x-3 px-4 py-2">
             <img src="./server-icon.svg" />
                <div>
                <p className="text-sm font-medium text-gray-500 sm:text-xs">
  {item.name}
</p>
                  <p className="text-xs text-gray-500">{item.ip}</p>
                </div>
              </td>
              <td className="px-4 py-2">
                <span className="px-3 py-1 text-sm font-medium text-red-600 bg-red-100 rounded-full">
                  {item.risk}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center text-sm text-gray-500 mt-4 px-4 gap-5">
        <img src="./right.svg"/>
        <p>
          Showing <span className="font-medium">1-2</span> of{" "}
          <span className="font-medium">2</span>
        </p>
        <img src="./left.svg"/>
      </div>
    </div>
  );
};

export default RiskTable;
