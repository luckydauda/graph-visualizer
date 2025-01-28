import React, { useState } from "react";
import ImageWithDefaults from "../ui/ImageWithDefaults";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/shadcn/card"; // Import shadcn Card components

interface ServerCardProps {
  title: string;
  description: string;
  subDescription: string;
}

const ServerCard: React.FC<ServerCardProps> = ({
  title,
  description,
  subDescription,
}) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const handleCardClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card
      className="rounded-mid shadow cursor-pointer border border-text-mediumgray hover:shadow-md transition-shadow"
      onClick={handleCardClick}
    >
      {/* Card Header */}
      <CardHeader className="pb-3">
        <p className="font-semibold text-gray-600 text-sm">Lorem P</p>
      </CardHeader>

      {/* Card Content */}
      <CardContent>
        <div className="flex bg-cardbg p-4 rounded-[20px] justify-between">
          {/* Icon and Label */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <ImageWithDefaults
                src="/server-icon.svg"
                alt="Server Icon"
                width={80}
                height={80}
              />
            </div>
            <div>
              <p className="text-[14px] font-medium text-softgray">Server</p>
              <p className="text-[10px] text-gray-500">Server</p>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="w-px h-15 bg-hline mx-4"></div>

          {/* Title and Sub Description */}
          <div className="flex flex-col gap-1">
            <div className="text-[14px] font-500 text-gray-500">{title}</div>
            <div className="text-[14px] font-500 text-gray-500">
              {subDescription}
            </div>
          </div>
        </div>
      </CardContent>

      {/* Description (conditionally rendered) */}
      {showDescription && (
        <CardFooter className="mt-4 text-sm text-gray-600">
          {description}
        </CardFooter>
      )}
    </Card>
  );
};

export default ServerCard;