import ContextualRisk from "../ContextualRisk/contextTualRisk";
import CustomGraph from "../Graph/customNode";
import RiskTable from "../RiskLevels/risktable";

export default function Home() {
  return (
    <main className="flex-1 p-sectionPadding md:p-sectionPaddingMd">
      {/* Top Row */}
      <div className="flex flex-col gap-gapLarge rounded-section bg-sectionBg shadow-section p-0 sm:p-sectionPadding md:p-sectionPaddingMd">

      <h2 className="mx-[30px] my-[15px] text-center text-header font-semibold md:mt-0 sm:mt-4 sm:text-[15px] md:text-headerlarge">
  Lorem Lorem Loremh
</h2>




        {/* Graph Section */}
        <div className="w-full flex-1 rounded-card bg-graphBg ">
          <CustomGraph />
        </div>

        {/* Contextual Risk and Table */}
        <h2 className="mx-[30px] my-[10px] text-center text-header font-semibold md:mt-0 sm:mt-4 sm:text-[15px] md:text-headerlarge">
          Lorem ipsum dolor sit
        </h2>
        <div className="flex flex-col gap-gapLarge p-[0_10px] md:p-0 md:flex-row">
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
