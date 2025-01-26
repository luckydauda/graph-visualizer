import ImageWithDefaults from "@/components/ui/ImageWithDefaults";;

export default function PopoverNode2() {
  const gridData = [
    { id: 1, type: "ip", content: "1.2.3.4" },
    { id: 2, type: "text", content: "Loremipsum" },
    { id: 3, type: "ip", content: "1.2.3.4" },
    { id: 4, type: "ip", content: "1.2.3.4" },
  ];
    return (
        <div className="w-full flex flex-col gap-2">
  {/* Header Section */}
  <div className="flex items-center gap-4 mb-2">
    <ImageWithDefaults
      src="./server-icon.svg"
      alt="Icon"
      className="w12 h-12 sm:w-12 sm:h-12"
      width={60}
      height={60}
    />
    <p className="text-lg font-medium text-gray-700 sm:text-sm">
      Loremipsu
    </p>
  </div>

  {/* Content Section */}
  <div className="flex items-center space-x-2">
  {/* Icon Section */}
  <div className="flex items-center justify-center">
    
      <ImageWithDefaults src="/receipt.svg" alt="File Icon" className="w-4 h-4" width={60}
      height={60}/>

  </div>

  {/* Text and IP Address Section */}
  <div className="flex items-center space-x-2">
    {/* Text */}
    <p className="text-l font-semibold text-gray-600">
      <span className="font-semibold">Lorem:</span> Loremipsum Loremipsum
    </p>

    {/* Highlighted IP Address */}
    <div className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-lg">
      1.2.3.4
    </div>
  </div>
</div>


  {/* Address Section */}
  <div className="flex items-center space-x-2">
      {gridData.map((item) => (
        <div key={item.id}>
          {item.type === "ip" ? (
            <div className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-lg">
              {item.content}
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">{item.content}</span>
            </div>
          )}
        </div>
      ))}
    </div>
</div>
    )

}


