export default function PopoverNode2() {
  const gridData = [
    "1.2.3.4",
    "Loremipsum",
    "1.2.3.4",
    "1.2.3.4",
    "1.2.3.4",
    "1.2.3.4",
  ];
    return (
        <div className="w-full">
  {/* Header Section */}
  <div className="flex items-center gap-4 mb-4">
    <img
      src="./server-icon.svg"
      alt="Icon"
      className="w-8 h-8 sm:w-6 sm:h-6"
    />
    <p className="text-lg font-medium text-gray-700 sm:text-sm">
      Loremipsu
    </p>
  </div>

  {/* Content Section */}
  <div className="mb-4">
    <p className="text-sm font-medium text-gray-600 sm:text-xs">
      <span className="inline-block bg-gray-100 p-1 rounded text-gray-500">
        📄
      </span>{" "}
      <span className="text-gray-600 font-bold">Lorem:</span>{" "}
      Loremipsum Loremipsum{" "}
      <span className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full text-xs sm:text-[10px]">
        1.2.3.4
      </span>
    </p>
  </div>

  {/* Address Section */}
  <div className="grid grid-cols-3 gap-4 sm:grid-cols-2">
  {gridData.map((item, index) => (
    <div
      key={index}
      className="bg-purple-100 text-purple-600 text-sm font-medium py-2 px-4 rounded-lg text-center sm:text-xs"
    >
      {item}
    </div>
  ))}
</div>
</div>
    )

}


