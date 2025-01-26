import ImageWithDefaults from "@/components/ui/ImageWithDefaults";;

export default function PopoverNode3() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-2">
        <ImageWithDefaults
          src="./icon-sheild.svg"
          alt="Icon"
          className="w-10 h-10 sm:w-12 sm:h-12"
          width={60}
         height={60}
        />
        <div>
          <p className="text-base font-semibold text-gray-500 sm:text-sm">
            Loremipsumdolorsit002
          </p>
          <p className="text-sm text-gray-500 sm:text-xs">192.168.1.2</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 sm:text-xs flex items-center gap-2">
        <ImageWithDefaults src="/receipt.svg" alt="File Icon" className="w-5 h-5" width={60}
      height={60}/>

          <span className="font-semibold text-base">Lorem:</span>
          <span className="text-yellow-500 font-medium text-[14px]">Lorem “Ipsum”</span>
        </p>
      </div>

      {/* Address Section */}
      <div className="space-y-2">
        <p className="text-lg text-gray-500 font-medium sm:text-base flex items-center gap-2">
          Loremipsum{" "}
          <span className="bg-popoverlightblue text-popoverlightbluetext px-2 py-2 rounded-md  text-xs sm:text-[14px]">
          lorem 1234,5678
          </span>
        </p>
      </div>
    </div>
  );
}
