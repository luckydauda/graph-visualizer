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
  Connection
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
import ArrowHandle from "./arrowHandle";

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

type CustomEdgeData = Edge & {
  // Add your custom properties here
  customProperty?: string;
};


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
             <ArrowHandle arrowType={data.arrowType} />
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


export default function CustomGraph() {
  const { nodes, edges, setEdges } = useGraphStore();


  return (
    <div className="h-[300px] w-full rounded bg-graph sm:mx-auto sm:w-[90%] sm:p-4 md:w-full md:p-8">
      {/* Include SVG Arrowhead Definitions */}
      {/* {arrowHeadMarker} */}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ customNode: CustomNode }}
        // onConnect={onConnect}
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
