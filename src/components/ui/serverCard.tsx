import React, { useState } from "react";

interface ServerCardProps {
  title: string;
  description: string;
  subDescription: string
}

const ServerCard: React.FC<ServerCardProps> = ({
  title,
  description,
  subDescription
}) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const handleCardClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      className="bg-white rounded-[20px] shadow p-4 cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleCardClick}
    >
      {/* Card Header */}
      <p className="pb-3 font-semibold text-gray-600 text-sm">Lorem P</p>
      <div className="flex bg-cardbg p-4 rounded-[20px]  justify-between">
        {/* Icon and Label */}
        <div className="flex items-center gap-4 ">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <img src="/server-icon.svg" alt="Server Icon"  />
          </div>
          <div>
            <p className="text-[12px] font-medium text-softgray">Server</p>
            <p className="text-[10px] text-gray-500">Server</p>
          </div>
        </div>
         {/* Vertical Line */}
         <div className="w-px h-15 bg-hline mx-4"></div>
        {/* Title */}
        <div className="flex flex-col gap-1">
        <div className="text-[13px] font-500 text-gray-500">{title}</div>
        <div className="text-[13px] font-500 text-gray-500">{subDescription}</div>
        </div>
       
      </div>

      {/* Description (conditionally rendered) */}
      {showDescription && (
        <div className="mt-4 text-sm text-gray-600">{description}</div>
      )}
    </div>
  );
};

export default ServerCard;
