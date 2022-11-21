import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { useNotifications } from "reapop";
import { updateInventory } from "../../../../services/admin";
import ItemInventory from "./items";
import ProductInventory from "./products";

const Inventory = () => {
  const inventoryData = useSelector((state: any) => state.inventory);
  const queryClient = useQueryClient();
  const [edit, setEdit] = useState(false);
  const { notify } = useNotifications();
  const { mutate } = useMutation(updateInventory, {
    onSuccess: (res) => {
      notify(res.data);
      queryClient.refetchQueries("inventory");
      setEdit(false);
    },
  });
  return (
    <div className="w-3/4 px-4 pb-16 mt-16 space-y-10 overflow-y-auto text-white">
      <h1 className="text-2xl font-bold text-center">Inventory</h1>
      <button
        className="block w-40 p-1 ml-auto font-bold text-black bg-white rounded-md"
        onClick={() => (edit ? mutate(inventoryData) : setEdit(true))}
      >
        {edit ? "Save" : "Edit"}
      </button>
      <p className="text-4xl font-bold ">Inventory</p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ItemInventory inventoryData={inventoryData} edit={edit} />
      </div>
      <p className="text-4xl font-bold">Products</p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ProductInventory inventoryData={inventoryData} edit={edit} />
      </div>
    </div>
  );
};

export default Inventory;
