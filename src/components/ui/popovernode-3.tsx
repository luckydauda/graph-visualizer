
export default function PopoverNode3() {
return (
<div className="w-full">
  {/* Header Section */}
  <div className="flex items-center gap-4 mb-4">
  <img
        src="./icon-sheild.svg"
        alt="Icon"
        className="w-10 h-10 sm:w-8 sm:h-8"
      />
    <div>
      <p className="text-lg font-medium text-gray-700 sm:text-sm">
        Loremipsumdolorsit
      </p>
      <p className="text-sm text-gray-500 sm:text-xs">192.168.1.1</p>
    </div>
  </div>

  {/* Content Section */}
  <div className="mb-4">
    <p className="text-sm font-medium text-gray-600 sm:text-xs">
      <span className="inline-block bg-gray-100 p-1 rounded text-gray-500">
        📄
      </span>{" "}
      <span className="text-gray-600 font-bold">Lorem:</span>{" "}
      <span className="text-yellow-500 font-medium">Lorem “Ipsum”</span>
    </p>
  </div>

  {/* Address Section */}
  <div className="space-y-2">
    <p className="text-sm text-gray-700 font-medium sm:text-xs">
      Loremipsum{" "}
      <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs sm:text-[10px]">
        1234, 5678
      </span>
    </p>
  </div>
</div>

)
}


