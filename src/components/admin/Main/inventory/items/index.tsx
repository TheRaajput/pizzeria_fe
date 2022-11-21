import classNames from "classnames";
import { useDispatch } from "react-redux";
import {
  decrementItems,
  incrementItems,
} from "../../../../../redux/slices/inventory";
interface Props {
  inventoryData: any;
  edit: boolean;
}
const ItemInventory = ({ inventoryData, edit }: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      {inventoryData &&
        Object.keys(inventoryData.items).map((inventory) => (
          <div className="" key={inventory}>
            <h1 className="mb-10 text-xl font-medium">{inventory}</h1>
            {inventoryData.items[inventory].map((invent: any) => (
              <div key={invent._id} className="flex justify-between mb-5">
                <p>{invent.name}</p>
                <div className="flex items-center justify-center space-x-0 text-white lg:space-x-2">
                  {edit && (
                    <button
                      className={classNames(
                        "w-6 h-6 text-black rounded-md bg-white"
                      )}
                      onClick={() =>
                        dispatch(
                          decrementItems({
                            categories: inventory,
                            id: invent._id,
                          })
                        )
                      }
                    >
                      -
                    </button>
                  )}
                  <p>{invent.quantity}</p>
                  {edit && (
                    <button
                      className={classNames(
                        "w-6 h-6 text-black rounded-md bg-white"
                      )}
                      onClick={() =>
                        dispatch(
                          incrementItems({
                            categories: inventory,
                            id: invent._id,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
    </>
  );
};

export default ItemInventory;
