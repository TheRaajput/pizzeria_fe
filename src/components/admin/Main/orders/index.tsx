import { useMutation, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { ordersTableHeader } from "../../../../helpers/admin";
import { getAllOrders, updateOrderStatus } from "../../../../services/admin";
import CustomPopover from "../../../shared/customPopover";
import CustomSelect from "../../../shared/customSelect";
import CustomTable from "../../../shared/customTable";

const Orders = () => {
  const token = useSelector((state: any) => state.auth.token);
  const {
    data: OrderData,
    isFetching,
    refetch,
  } = useQuery<any>(["orders"], () => getAllOrders(token), {
    refetchOnWindowFocus: false,
    retry: false,
    enabled: token ? true : false,
  });
  const { mutate } = useMutation(updateOrderStatus, {
    onSuccess: () => {
      refetch();
    },
  });
  const statusHandler = (id: string, status: string) => {
    mutate({ id, status });
  };
  const Statuses = [
    { id: "pending", name: "Pending" },
    { id: "processing", name: "Processing" },
    { id: "complete", name: "Complete" },
  ];
  return (
    <div className="w-3/4 px-4 mt-16 space-y-10 overflow-y-auto text-white">
      <h1 className="text-2xl font-bold text-center">Orders</h1>
      <CustomTable tableHeader={ordersTableHeader}>
        {!isFetching &&
          OrderData.data &&
          OrderData.data.map((orders: any, idx: number) => (
            <tr key={idx} className="bg-gray-800 border-b border-gray-700">
              <td className="px-6 py-4">{orders.name}</td>
              <td className="px-6 py-4">{orders.email}</td>
              <td className="px-6 py-4">{orders.contact_number}</td>
              <td>
                <CustomSelect
                  defaultValue={orders.status}
                  id={orders._id}
                  status={orders.status}
                  onChange={statusHandler}
                  items={Statuses}
                />
              </td>
            </tr>
          ))}
      </CustomTable>
    </div>
  );
};

export default Orders;
