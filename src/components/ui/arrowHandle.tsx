// src/components/ArrowHandle.tsx
import React from "react";
import { Handle, Position } from "@xyflow/react";

interface ArrowHandleProps {
  arrowType: "straight" | "dimension" | null;
}

const ArrowHandle: React.FC<ArrowHandleProps> = ({ arrowType }) => {
  return (
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
      {arrowType === "straight" && (
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
      {arrowType === "dimension" && (
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
  );
};

export default ArrowHandle;
