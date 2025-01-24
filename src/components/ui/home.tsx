import ContextualRisk from "./contextTualRisk";
import CustomGraph from "./customNode";
import RiskTable from "./risktable";

export default function Home() {
  return (
    <main className="flex-1 h-screen p-4 md:p-6 overflow-hidden">
      {/* Top Row */}
      <div className="flex flex-col gap-6 h-full rounded-[25px] bg-white shadow-lg p-4 md:p-8 overflow-hidden">
        <p className="text-left font-semibold text-header">Lorem Lorem Loremh</p>
        
        {/* Graph Section */}
        <div className="w-full flex-1 rounded-lg bg-graph p-4 md:p-8 overflow-auto">
          <CustomGraph />
        </div>

        {/* Contextual Risk and Table */}
        <p className="text-left font-semibold text-header">
          Lorem ipsum dolor sit
        </p>
        <div className="flex flex-col gap-6 md:flex-row flex-1 overflow-hidden">
          {/* Contextual Risk Table */}
          <section className="w-full flex-1 p-4 overflow-auto">
            <RiskTable />
          </section>

          {/* Risk Indicator */}
          <section className="w-full flex-1 p-4 overflow-auto">
            <ContextualRisk />
          </section>
        </div>
      </div>
    </main>
  );
}
