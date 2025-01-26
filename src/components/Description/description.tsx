import { useTableDataStore } from "@/stores/descriptionTableStores";
import ServerCard from "./serverCard";

export default function Description() {
  const tableData = useTableDataStore((state) => state.tableData);

  return (
    <section className="mt-7 flex max-h-[calc(100vh-50px)] flex-col gap-sectionGap overflow-y-auto rounded-card bg-cardBackground p-cardPadding shadow-card thin-scrollbar sm:flex-1 sm:w-auto md:w-96 md:px-5 md:!flex-none">
      {/* Description Header */}
      <div>
        <h2 className="mb-2 text-header font-semibold text-headerlarge">
          Description
        </h2>
        <p className="text-small leading-doubled font-400 leading-relaxed text-mediumgray">
          Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque
          Gravida Nibh Et Magna Faucibus. Dui Commodo Ut Metus Amet Egestas
          Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla
          Sem Pellentesque. Sit In Vel Sed Cursus Metus Sit Fringilla
          Vestibulum.
        </p>
      </div>

      {/* Extra Section */}
      <div>
        <h3 className="mb-2 text-header font-semibold text-headerlarge">
          Extra
        </h3>
        <p className="text-small leading-doubled font-400 text-mediumgray">
          Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames
          egestas tellus duis pretium tempus. Justo nisi nisl lorem lectus id
          ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet
          gravida integer velit felis. Eu consectetur interdum auctor sed
          aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque
          commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in
          nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus.
          Amet mus in vel etiam. Interdum habitant congue massa in etiam sit.
          Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.
        </p>
      </div>

      {/* Table Section */}
      <table className="w-full table-auto border-collapse text-tableHeader">
        <tbody>
          <tr className="border-b" />
          {tableData.map((row) => (
            <tr key={row.id}>
              <td className="p-tablePadding font-semibold text-tableHeader">
                {row.label}
              </td>
              <td className="p-tablePadding text-tableData">{row.value}</td>
            </tr>
          ))}
          <tr className="border-b border-text-mediumgray" />
        </tbody>
      </table>

      {/* Server Cards */}
      <div>
        <p className="p-tablePadding font-semibold text-tableHeader">
          Lorem Ipsum Dolor Sit
        </p>
        <div className="flex flex-col gap-sectionGap">
          <ServerCard
            title="Lorem Ipsum Dolor Sit."
            description="Lorem Ipsum Dolor Sit Amet Consectetur."
            subDescription="Vitae Arcu. Magna."
          />
          <ServerCard
            title="Lorem Ipsum Dolor Sit."
            description="Lorem Ipsum Dolor Sit Amet Consectetur."
            subDescription="Vitae Arcu. Magna."
          />
          <ServerCard
            title="Lorem Ipsum Dolor Sit."
            description="Lorem Ipsum Dolor Sit Amet Consectetur."
            subDescription="Vitae Arcu. Magna."
          />
        </div>
      </div>
    </section>
  );
}
