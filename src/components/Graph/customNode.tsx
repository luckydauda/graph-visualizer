"use client";

import React, { useState } from "react";
import {
  ReactFlow,
 
  Node,
  Edge,
 
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/shadcn/popover"; // Adjust this import based on your popover library

import PopoverNode1 from "./popovernode-1";
import PopoverNode2 from "./popovernode-2";
import PopoverNode3 from "./popovernode-3";
import { create } from "zustand";
import ArrowHandle from "./arrowHandle";
import ImageWithDefaults from "@/components/ui/ImageWithDefaults";;

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
          <ImageWithDefaults
            src={data.icon}
            alt="Node Icon"
            width={45}
            height={45}
            // className="sm:w-6 sm:h-6"
          />
<p className="font-400 text-lightgray text-[13px] md:font-medium break-words whitespace-normal">
  {data.label}
</p>



          {data.ip && (
            <p className="md:text-center md:font-medium sw:font-300 sw:text-left text-ipline text-[10px] sm:text-[10px] md:text-[10px]">
              {data.ip}
            </p>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent  className="rounded-[25px]  bg-white p-4 shadow-b-sm w-full" 
       style={{ transform: "translateY(10px)" }}>
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
        label: "Loremio001",
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
        label: "Loremuit002",
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
    <div className="h-[380px] flex-col flex w-full rounded bg-white md:bg-graph sm:mx-auto sm:w-[90%] sm:p-4 md:w-full md:p-8">

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
        onInit={(instance) => instance.fitView()}
        proOptions={{ hideAttribution: true }} // Hides the trademark text
      >
        {/* Background and Controls are commented out */}
      </ReactFlow>

      {/* Legend Section */}
      <div  className="m-[10px] md:mt-0 flex flex-col gap-4 sm:mt-[-100px]">
        <div className="w-full border-b border-gray-300" />
        <div className="flex flex-wrap items-center gap-4 space-x-0 rounded-lg sm:flex-nowrap sm:space-x-6">
          {/* Red Item */}
          <div className="mb-2 flex items-center space-x-2 sm:mb-0">
            <ImageWithDefaults
              src="./lorem-red.svg"
              alt="Red Icon"
              className="h-3 w-3 sm:h-6 sm:w-6 md:w-8 md:h-8" // Smaller size for mobile
            />
            <p className="text-[14px] font-bold text-red-500 sm:text-[16px]">
              Lorem
            </p>{" "}
            {/* Smaller text for mobile */}
          </div>

          {/* Orange Item */}
          <div className="mb-2 flex items-center space-x-2 sm:mb-0">
            <ImageWithDefaults
              src="./lorem-yellow.svg"
              alt="Yellow Icon"
              className="h-3 w-3 sm:h-6 sm:w-6 md:w-8 md:h-8" // Smaller size for mobile
            />
            <p className="text-[14px] font-bold text-yellow-500 sm:text-[16px]">
              Lorem
            </p>{" "}
            {/* Smaller text for mobile */}
          </div>

          {/* Green Item */}
          <div className="mb-2 flex items-center space-x-2 sm:mb-0">
            <ImageWithDefaults
              src="./lorem-green.svg"
              alt="Green Icon"
              className="h-3 w-3 sm:h-6 sm:w-6 md:w-8 md:h-8" // Smaller size for mobile
            />
            <p className="text-[14px] font-bold text-green-500 sm:text-[16px]">
              Lorem
            </p>{" "}
            {/* Smaller text for mobile */}
          </div>
        </div>
      </div>
    </div>
  );
}
