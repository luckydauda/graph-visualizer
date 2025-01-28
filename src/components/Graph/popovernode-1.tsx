import { useGridDataStore } from "@/stores/gridDataStores";

export default function PopoverNode1() {
  const gridData = useGridDataStore((state) => state.gridData);

  return (
    <div className="md:w-[550px] sm:w-[300px] sm:w-full space-y-4 md:px-4 sm:px-2">
      {/* Title */}
      <div className="inline-block bg-popoverred text-red-600 md:text-sm text-[10px] font-medium  px-4 py-1 ml-5 sm:ml-2 rounded-lg">
        Lorem Ipsum Dolor Sit
      </div>

      {/* Grid of IP Addresses */}
      <div className="grid grid-cols-3 gap-2 px-0 md:px-12 sm:px-0 md:px-4">
        {gridData.map((item, index) => (
          <div
            key={index}
            className="bg-popoverred text-red-600 md:text-sm sm:text-[10px] font-medium px-4 py-1 rounded-lg text-left"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-4 text-sm font-medium ml-5 sm:ml-2">
        <span className="bg-popoverpurple text-popoverpurpltext py-1 px-4 rounded-lg inline-block">
          Lorem: <span className="font-semibold md:text-sm sm:text-[10px]">1.2.3.4</span>
        </span>
      </div>
    </div>
  );
}
