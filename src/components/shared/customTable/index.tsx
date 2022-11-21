interface Props {
  tableHeader: { _id: string; title: string }[];
  children: JSX.Element | JSX.Element[];
}
const CustomTable = ({ tableHeader, children }: Props) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeader.map(({ _id, title }) => (
              <th scope="col" key={_id} className="px-6 py-3">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default CustomTable;
