import ContextualRisk from "./contextTualRisk";
import CustomGraph from "./customNode";



export default function Home() {
  return (
    <main className="flex-1 md:p-6">
      {/* Top Row */}
      <div className="flex h-screen max-h-[calc(100vh-50px)] flex-col gap-6 rounded-[25px] bg-white p-0 shadow sm:px-4 md:h-[calc(100vh-150px)] md:px-8 md:pb-4 md:pt-3">
        <p className="text-left font-semibold text-header sm:m-4">
          Lorem Lorem Loremh
        </p>

        {/* Graph Section */}
        <div className="col-span-3 w-full rounded-lg bg-graph px-0 py-0 pb-10 sm:w-full sm:px-4 md:px-8 md:py-9 md:pt-1">
          <CustomGraph />
        </div>

        {/* Contextual Risk and Table */}
        <p className="text-left font-semibold text-header sm:m-4">
          Lorem ipsum dolor sit
        </p>
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          {/* Contextual Risk Table */}
          <section className="w-full p-4">
            <RiskTable />
          </section>

          {/* Risk Indicator */}
          <section className="w-full p-4">
            <ContextualRisk />
          </section>
        </div>
      </div>
    </main>
  );
}
