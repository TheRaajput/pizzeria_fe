import { Items } from "../../types/inventory";

export const processCustomOrder = (orderItems: Items) => {
  let OrderData = Object.assign({}, orderItems);
  const processedData = orderItems;
  let cost = 0;
  Object.keys(OrderData).map((item: string) => {
    if (item === "vegs") {
      if (OrderData.vegs.length > 2) {
        OrderData.vegs.slice(2).map((item) => {
          cost = cost + item.cost_per;
        });
      }
    }
    if (item === "meat") {
      if (OrderData.meat.length > 1) {
        OrderData.meat.slice(1).map((item) => {
          cost = cost + item.cost_per;
        });
      }
    }
  });
  return { processedData, cost };
};
