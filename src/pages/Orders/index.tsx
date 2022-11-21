import { useState } from "react";
import { useQuery } from "react-query";
import OrderDetails from "../../components/orders/orderDetails";
import { getOrder } from "../../services/orders";

const OrderHome = () => {
  const { isFetching, data: OrdersData } = useQuery(
    ["user_order"],
    () => getOrder(),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="h-screen pt-16 overflow-y-auto bg-black bg-opacity-90">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Orders</h1>
        {!isFetching &&
          OrdersData?.data &&
          OrdersData?.data?.map((orders: any) => (
            <OrderDetails key={orders._id} ordersData={orders} />
          ))}
      </div>
    </div>
  );
};

export default OrderHome;
