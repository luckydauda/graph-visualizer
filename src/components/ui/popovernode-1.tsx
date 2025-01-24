import { useGridDataStore } from "@/stores/gridDataStores";

export default function PopoverNode1() {
  const gridData = useGridDataStore((state) => state.gridData);
    return (

        <div className=" w-full">
  {/* Title */}
  <h2 className="text-sm font-semibold text-red-500 mb-4">
    Lorem Ipsum Dolor Sit
  </h2>

  {/* Grid of IP Addresses */}
  <div className="grid grid-cols-3 gap-4">
  {gridData.map((item, index) => (
    <div
      key={index}
      className="bg-red-100 text-red-500 text-sm font-medium py-2 px-4 rounded-lg text-center"
    >
      {item}
    </div>
  ))}
</div>



  {/* Footer Section */}
  <div className="mt-4 text-blue-500 text-sm font-medium">
    <span className="bg-blue-100 py-2 px-4 rounded-lg inline-block">
      Lorem: <span className="font-semibold">1.2.3.4</span>
    </span>
  </div>
</div>

    )
}