import ContextualRisk from "./contextTualRisk";
import CustomGraph from "./customNode";
import RiskTable from "./risktable";

export default function Home() {
  return (
    <main className="flex-1 p-4 md:p-6">
      {/* Top Row */}
      <div className="flex flex-col gap-6 rounded-[25px] bg-white shadow-lg p-4 md:p-8">
        <p className="text-left font-semibold text-header">
          Lorem Lorem Loremh
        </p>
        {/* Graph Section */}
        <div className="w-full flex-1 rounded-lg bg-graph md:p-8">
          <CustomGraph />
        </div>

        {/* Contextual Risk and Table */}
        <p className="text-left font-semibold text-header">
          Lorem ipsum dolor sit
        </p>
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Contextual Risk Table */}
          <section className="w-full  p-4  md:flex-1">
            <RiskTable />
          </section>

          {/* Risk Indicator */}
          <section className="w-full  p-4  md:flex-1">
            <ContextualRisk />
          </section>
        </div>
      </div>
    </main>
  );
}
