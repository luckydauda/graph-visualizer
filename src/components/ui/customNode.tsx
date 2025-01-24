"use client";

import React, { useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Handle,
  addEdge,
  Position,
  getBezierPath,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"; // Adjust this import based on your popover library
import { useCallback } from "react";
import PopoverNode1 from "./popovernode-1";
import PopoverNode2 from "./popovernode-2";
import PopoverNode3 from "./popovernode-3";
import { create } from "zustand";

// Define types for nodes and edges
type CustomNodeData = {
  label: string;
  icon: string;
  type: string;
  showIcon: boolean;
  arrowType: string | null;
  ip?: string;
  id: string;
};

type CustomEdgeData = Edge;

type GraphState = {
  nodes: Node<CustomNodeData>[];
  edges: CustomEdgeData[];
  setNodes: (nodes: Node<CustomNodeData>[]) => void;
  setEdges: (edges: CustomEdgeData[]) => void;
};
// Custom Node Component with Popover
const CustomNode = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          {/* SVG Inside Handle */}
          <div className={`ml-[120px]`}>
            {data.showIcon && (
              <Handle
                type="target"
                position={Position.Right}
                style={{
                  background: "transparent",
                  border: "none",
                  width: "100%",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                }}
              >
                {data.arrowType === "straight" && (
                  <svg
                    width="300px"
                    height="10"
                    viewBox="0 0 59 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M58.5 2.92004L54.75 0.754978L54.75 5.08511L58.5 2.92004ZM9.87787e-09 3.29504L55.125 3.29504L55.125 2.54504L-9.87729e-09 2.54504L9.87787e-09 3.29504Z"
                      fill="#858D9D"
                    />
                  </svg>
                )}
                {data.arrowType === "dimension" && (
                  <svg
                    width="120"
                    height="130"
                    viewBox="0 0 208 110"
                    stroke="#858D9D"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M208 2.56104L204.25 4.7261L204.25 0.395972L208 2.56104ZM80.8318 55.936L-3.57102e-06 55.936L-3.52084e-06 55.186L80.8318 55.186L80.8318 55.936ZM204.625 2.93604L144.795 2.93603L144.795 2.18603L204.625 2.18604L204.625 2.93604ZM127.503 11.2585L98.7098 47.3314L98.1236 46.8635L126.917 10.7907L127.503 11.2585ZM144.795 2.93603C138.066 2.93603 131.702 5.99895 127.503 11.2585L126.917 10.7907C131.258 5.35277 137.837 2.18603 144.795 2.18603L144.795 2.93603ZM80.8318 55.186C87.5615 55.186 93.9254 52.1231 98.1236 46.8635L98.7098 47.3314C94.3692 52.7693 87.7896 55.936 80.8318 55.936L80.8318 55.186Z"
                      fill="#858D9D"
                    />
                    <path
                      d="M208 107.279L204.25 105.114L204.25 109.444L208 107.279ZM80.9605 54.9038L-3.50411e-06 54.9038L-3.45394e-06 55.6538L80.9605 55.6538L80.9605 54.9038ZM204.625 106.904L144.667 106.904L144.667 107.654L204.625 107.654L204.625 106.904ZM127.504 98.7416L98.7049 63.3427L98.1231 63.816L126.922 99.2149L127.504 98.7416ZM144.667 106.904C138.009 106.904 131.705 103.906 127.504 98.7416L126.922 99.2149C131.266 104.554 137.783 107.654 144.667 107.654L144.667 106.904ZM80.9605 55.6538C87.618 55.6538 93.9216 58.6517 98.1231 63.816L98.7049 63.3427C94.361 58.0033 87.8437 54.9038 80.9605 54.9038L80.9605 55.6538Z"
                      fill="#858D9D"
                    />
                  </svg>
                )}
              </Handle>
            )}
          </div>

          {/* Node Content */}
          <img
            src={data.icon}
            alt="Node Icon"
            // className="sm:w-6 sm:h-6"
          />
          <p className="text-[10px] text-lightgray sm:text-xs">{data.label}</p>
          {data.ip && (
            <p className="text-center text-[8px] text-ipline sm:text-[10px]">
              {data.ip}
            </p>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="rounded-md bg-white p-4 shadow-lg">
      {(() => {
    switch (data?.id) {
      case "1":
        return <PopoverNode1 />;
      case "2":
      case "3":
        return <PopoverNode2 />;
      case "4":
      case "5":
        return <PopoverNode3 />;
      default:
        return null;
    }
  })()}
      </PopoverContent>
    </Popover>
  );
};

// SVG Arrowhead Definition
const arrowHeadMarker = (
  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <defs>
      <marker
        id="customArrow"
        markerWidth="10"
        markerHeight="7"
        refX="10"
        refY="3.5"
        orient="auto"
      >
        <path
          d="M58.5 2.92004L54.75 0.754978L54.75 5.08511L58.5 2.92004ZM9.87787e-09 3.29504L55.125 3.29504L55.125 2.54504L-9.87729e-09 2.54504L9.87787e-09 3.29504Z"
          fill="#858D9D"
        />
      </marker>
    </defs>
  </svg>
);

// Nodes Data
const useGraphStore = create<GraphState>((set) => ({
  nodes: [
    {
      id: "1",
      position: { x: 50, y: 150 },
      data: {
        label: "Loremipsumm",
        icon: "/node-icon.svg",
        type: "user",
        showIcon: true,
        arrowType: "straight",
        id: "1",
      },
      type: "customNode",
    },
    {
      id: "2",
      position: { x: 250, y: 150 },
      data: {
        label: "Loremipsu",
        icon: "/server-icon.svg",
        type: "database",
        showIcon: true,
        arrowType: "straight",
        id: "2",
      },
      type: "customNode",
    },
    {
      id: "3",
      position: { x: 450, y: 150 },
      data: {
        label: "Loremipsu",
        icon: "/server-icon.svg",
        type: "database",
        showIcon: true,
        arrowType: "dimension",
        id: "3",
      },
      type: "customNode",
    },
    {
      id: "4",
      position: { x: 650, y: 100 },
      data: {
        label: "Loremipsumdolorsit",
        icon: "/node-icon-active.svg",
        ip: "192.168.1.1",
        type: "alert",
        showIcon: false,
        arrowType: null,
        id: "4",
      },
      type: "customNode",
    },
    {
      id: "5",
      position: { x: 650, y: 200 },
      data: {
        label: "Loremipsumdolorsit002",
        icon: "/node-icon-active.svg",
        ip: "192.168.1.2",
        type: "alert",
        showIcon: false,
        arrowType: null,
        id: "5",
      },
      type: "customNode",
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
      type: "custom",
      style: { stroke: "#858D9D", strokeWidth: 2 },
      markerEnd: "url(#customArrow)",
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "custom",
      style: { stroke: "#858D9D", strokeWidth: 2 },
      markerEnd: "url(#customArrow)",
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      type: "custom",
      style: { stroke: "#858D9D", strokeWidth: 2 },
      markerEnd: "url(#customArrow)",
    },
    {
      id: "e3-5",
      source: "3",
      target: "5",
      type: "custom",
      style: { stroke: "#858D9D", strokeWidth: 2 },
      markerEnd: "url(#customArrow)",
    },
  ],
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
}));

// Edges Data with Arrowhead Markers
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    arrowHeadType: "arrow",
    type: "custom",

    style: { stroke: "#858D9D", strokeWidth: 2 },
    markerEnd: "url(#customArrow)", // Attach the custom arrowhead
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "custom",
    style: { stroke: "#858D9D", strokeWidth: 2 },
    markerEnd: "url(#customArrow)", // Attach the custom arrowhead
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "custom",
    style: { stroke: "#858D9D", strokeWidth: 2 },
    markerEnd: "url(#customArrow)", // Attach the custom arrowhead
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    type: "custom",
    style: { stroke: "#858D9D", strokeWidth: 2 },
    markerEnd: "url(#customArrow)", // Attach the custom arrowhead
  },
];

export default function CustomGraph() {
  const { nodes, edges, setEdges } = useGraphStore();

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="h-[300px] w-full rounded bg-graph p-4 sm:mx-auto sm:w-[90%] sm:p-4 md:w-full md:p-8">
      {/* Include SVG Arrowhead Definitions */}
      {arrowHeadMarker}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ customNode: CustomNode }}
        onConnect={onConnect}
        nodesDraggable={false} // Disable node dragging
        panOnDrag={false} // Disable canvas panning
        zoomOnScroll={false} // Disable zoom on scroll
        zoomOnDoubleClick={false} // Disable zoom on double-click
        zoomOnPinch={false} // Disable pinch-to-zoom
        fitView
        proOptions={{ hideAttribution: true }} // Hides the trademark text
      >
        {/* Background and Controls are commented out */}
      </ReactFlow>

      {/* Legend Section */}
      <div className="mt-[-40px] flex flex-col gap-4 sm:mt-4">
        <div className="w-full border-b" />
        <div className="flex flex-wrap items-center gap-4 space-x-0 rounded-lg sm:flex-nowrap sm:space-x-6">
          {/* Red Item */}
          <div className="mb-2 flex items-center space-x-2 sm:mb-0">
            <img
              src="./lorem-red.svg"
              alt="Red Icon"
              className="h-3 w-3 sm:h-6 sm:w-6" // Smaller size for mobile
            />
            <p className="text-[10px] font-bold text-red-500 sm:text-sm">
              Lorem
            </p>{" "}
            {/* Smaller text for mobile */}
          </div>

          {/* Orange Item */}
          <div className="mb-2 flex items-center space-x-2 sm:mb-0">
            <img
              src="./lorem-yellow.svg"
              alt="Yellow Icon"
              className="h-3 w-3 sm:h-6 sm:w-6" // Smaller size for mobile
            />
            <p className="text-[10px] font-bold text-yellow-500 sm:text-sm">
              Lorem
            </p>{" "}
            {/* Smaller text for mobile */}
          </div>

          {/* Green Item */}
          <div className="mb-2 flex items-center space-x-2 sm:mb-0">
            <img
              src="./lorem-green.svg"
              alt="Green Icon"
              className="h-3 w-3 sm:h-6 sm:w-6" // Smaller size for mobile
            />
            <p className="text-[10px] font-bold text-green-500 sm:text-sm">
              Lorem
            </p>{" "}
            {/* Smaller text for mobile */}
          </div>
        </div>
      </div>
    </div>
  );
}
