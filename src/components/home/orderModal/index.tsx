import CustomModal from "../../shared/customModal";
import CustomMulti from "../../shared/customMulti";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMutation } from "react-query";
import { placeCustomOrder } from "../../../services/home";

const OrderModal = () => {
  const inventory = useSelector((state: any) => state.inventory);
  const [data, setData] = useState<any>({
    pizza_bases: [],
    vegs: [],
    sauces: [],
    meat: [],
    cheese: [],
  });
  const onChange = (key: string, val: any) => {
    switch (key) {
      case "pizza_bases":
        return setData({ ...data, pizza_bases: [...val] });
      case "sauces":
        return setData({ ...data, sauces: [...val] });
      case "cheese":
        return setData({ ...data, cheese: [...val] });
      case "vegs":
        return setData({ ...data, vegs: [...val] });
      case "meat":
        return setData({ ...data, meat: [...val] });
    }
  };
  const { mutate } = useMutation(placeCustomOrder, {
    onSuccess: (res) => {
      console.log(res);
    },
  });
  return (
    <div>
      <CustomModal
        title="Customize your pizza"
        buttonText="Customize your pizza"
      >
        {Object.keys(inventory).length >= 0 ? (
          <form className="space-y-5">
            <CustomMulti
              selected={data.pizza_bases}
              setSelected={setData}
              onChange={onChange}
              item_key="pizza_bases"
              items={
                Object.keys(inventory).length && inventory.items.pizza_bases
              }
            />
            <CustomMulti
              selected={data.sauces}
              setSelected={setData}
              onChange={onChange}
              item_key="sauces"
              items={Object.keys(inventory).length && inventory.items.sauces}
            />
            <CustomMulti
              selected={data.cheese}
              setSelected={setData}
              onChange={onChange}
              item_key="cheese"
              items={Object.keys(inventory).length && inventory.items.cheese}
            />
            <CustomMulti
              selected={data.vegs}
              setSelected={setData}
              onChange={onChange}
              item_key="vegs"
              items={Object.keys(inventory).length && inventory.items.vegs}
            />
            <CustomMulti
              selected={data.meat}
              setSelected={setData}
              onChange={onChange}
              item_key="meat"
              items={Object.keys(inventory).length && inventory.items.meat}
            />
            <button
              onClick={(ev) => {
                ev.preventDefault();
                mutate(data);
              }}
              className="flex justify-center w-full p-3 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-green-400 rounded-full shadow-lg cursor-pointer hover:bg-green-500"
            >
              Create Order
            </button>
          </form>
        ) : (
          <></>
        )}
      </CustomModal>
    </div>
  );
};

export default OrderModal;
