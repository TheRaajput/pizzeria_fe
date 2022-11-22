import { useQuery } from "react-query";
import { API_URLS } from "../../../config/API_URLS";
import { Order } from "../../../types/order";
import axiosInstance from "../../../utils/axios";
interface Props {
  ordersData?: Order;
}
const OrderDetails = ({ ordersData }: Props) => {
  const { data } = useQuery(
    ["order-status", ordersData?._id],
    ({ signal }) =>
      axiosInstance.get(
        API_URLS.base_url + "/v1/order/order-status/" + ordersData?._id,
        { signal }
      ),
    {
      onSuccess: (res: any) => {
        console.log(res);
      },
      refetchInterval: (data: any) => (!data ? 5000 : false),
    }
  );
  return (
    <div className="flex items-center justify-between w-full p-6 mb-2 text-white bg-gray-700 rounded-lg">
      <div className="w-1/4">
        <p className="text-lg font-bold lg:text-2xl">Personal Info</p>
        <div className="text-sm font-medium">
          <p>{ordersData?.name}</p>
          <p>{ordersData?.contact_number}</p>
          <p>{ordersData?.email}</p>
        </div>
        <div>
          <p className="text-lg font-bold lg:text-2xl">Order Items</p>
          {ordersData?.line_items
            ? ordersData?.line_items.map((order_items) => (
                <div className="flex text-sm lg:text-md" key={order_items._id}>
                  <p>{order_items.name}</p>
                  <p>{order_items.quantity}</p>
                </div>
              ))
            : ""}

          {ordersData && (
            <p className="text-sm break-words lg:text-md">
              {ordersData?.toppings.pizza_bases &&
                ordersData?.toppings.pizza_bases.map((x) => x.name).join(", ")}
              ,&nbsp;
              {ordersData?.toppings.sauces &&
                ordersData?.toppings.sauces.map((x) => x.name).join(", ")}
              ,&nbsp;
              {ordersData?.toppings.cheese &&
                ordersData?.toppings.cheese.map((x) => x.name).join(", ")}
              ,&nbsp;
              {ordersData?.toppings.vegs &&
                ordersData?.toppings.vegs.map((x) => x.name).join(", ")}
              ,&nbsp;
              {ordersData?.toppings.meat &&
                ordersData?.toppings.meat.map((x) => x.name).join(", ")}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-10">
        <span>cost</span>
        <span>{ordersData?.price ? ordersData?.price : "0"}</span>
      </div>
      <div>{data?.data ? data?.data : ordersData?.status}</div>
    </div>
  );
};

export default OrderDetails;
