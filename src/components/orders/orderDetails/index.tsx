import { useQuery } from "react-query";
import { Order } from "../../../types/order";
import axiosInstance from "../../../utils/axios";
interface Props {
  ordersData?: Order;
}
const OrderDetails = ({ ordersData }: Props) => {
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
                <div
                  className="flex text-sm lg:text-md"
                  key={order_items._id}
                >
                  <p>{order_items.name}</p>
                  <p>{order_items.quantity}</p>
                </div>
              ))
            : ""}
          {ordersData?.is_custom && (
            <p className="text-sm break-words lg:text-md">
              {ordersData.toppings.pizza_bases.map((x) => x.name).join(", ")}
              ,&nbsp;
              {ordersData.toppings.sauces.map((x) => x.name).join(", ")},&nbsp;
              {ordersData.toppings.cheese.map((x) => x.name).join(", ")},&nbsp;
              {ordersData.toppings.vegs.map((x) => x.name).join(", ")},&nbsp;
              {ordersData.toppings.meat.map((x) => x.name).join(", ")}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-10">
        <span>cost</span>
        <span>{ordersData?.price ? ordersData?.price : ""}</span>
      </div>
      <div>{ordersData?.status}</div>
    </div>
  );
};

export default OrderDetails;