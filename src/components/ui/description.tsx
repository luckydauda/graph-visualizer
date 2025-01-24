import ServerCard from "./serverCard";

export default function Description() {

    const tableData = [
        { id: 1, label: "Lorem Ipsum Dolor", value: "10/19/2017" },
        { id: 2, label: "Lorem Ipsum Dolor", value: "Ut" },
        { id: 3, label: "Lorem Ipsum Dolor", value: "Eros" },
        { id: 4, label: "Lorem Ipsum Dolor", value: "✔ Yes" },
        { id: 5, label: "Lorem Ipsum Dolor", value: "Sit" },
        { id: 6, label: "Lorem Ipsum Dolor", value: "Lorem Ipsum Dolor" },
        { id: 7, label: "Lorem Ipsum Dolor Sit", value: "Lorem P" },
      ];
  return (
    <section className="mt-5 flex max-h-[calc(100vh-50px)] w-96 flex-col gap-6 overflow-y-auto rounded-[25px] bg-white p-4 shadow">
      {/* Description Header */}
      <div>
        <h2 className="mb-2 text-lg font-semibold text-header">Description</h2>
        <p className="text-[13px] leading-[2] leading-relaxed text-gray-500">
          Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque
          Gravida Nibh Et Magna Faucibus. Dui Commodo Ut Metus Amet Egestas
          Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla
          Sem Pellentesque. Sit In Vel Sed Cursus Metus Sit Fringilla
          Vestibulum.
        </p>
      </div>

      {/* Extra Section */}
      <div>
        <h3 className="mb-2 text-lg font-semibold text-header">Extra</h3>
        <p className="text-[13px] leading-[2] text-gray-500">
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
      <table className="w-full table-auto border-collapse text-gray-600">
  <tbody>
    <tr className="border-b" />

    {tableData.map((row) => (
      <tr key={row.id}>
        <td className="p-2 text-base font-semibold text-gray-600">{row.label}</td>
        <td className="p-2 text-base text-gray-500">{row.value}</td>
      </tr>
    ))}

    <tr className="border-b" />
  </tbody>
</table>

      <div>
        <p className="p-2 text-base font-bold text-gray-600">
          Lorem Ipsum Dolor Sit
        </p>
        <div className="flex flex-col gap-4">
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
