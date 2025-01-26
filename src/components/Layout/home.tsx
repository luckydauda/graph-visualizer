import ContextualRisk from "../ContextualRisk/contextTualRisk";
import CustomGraph from "../Graph/customNode";
import RiskTable from "../RiskLevels/risktable";

export default function Home() {
  return (
    <main className="flex-1 p-sectionPadding md:p-sectionPaddingMd">
      {/* Top Row */}
      <div className="flex flex-col gap-gapLarge rounded-section bg-sectionBg shadow-section p-sectionPadding md:p-sectionPaddingMd">
        <h2 className="mb-2 text-header font-semibold text-headerlarge">
          Lorem Lorem Loremh
        </h2>

        {/* Graph Section */}
        <div className="w-full flex-1 rounded-card bg-graphBg ">
          <CustomGraph />
        </div>

        {/* Contextual Risk and Table */}
        <h2 className="mb-2 text-header font-semibold text-headerlarge">
          Lorem ipsum dolor sit
        </h2>
        <div className="flex flex-col gap-gapLarge md:flex-row">
          {/* Contextual Risk Table */}
          <section className="w-full md:flex-1">
            <RiskTable />
          </section>

          {/* Risk Indicator */}
          <section className="w-full md:flex-1">
            <ContextualRisk />
          </section>
        </div>
      </div>
    </main>
  );
}
