import classNames from "classnames";
import { useDispatch } from "react-redux";
import {
  decrementProducts,
  incrementProducts,
} from "../../../../../redux/slices/inventory";
interface Props {
  inventoryData: any;
  edit: boolean;
}
const ProductInventory = ({ inventoryData, edit }: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      {inventoryData &&
        inventoryData?.products.map((products: any) => (
          <div className="flex justify-between" key={products._id}>
            <h1 className="text-lg font-medium">{products?.name}</h1>
            <div className="flex items-center justify-center mt-0 space-x-2 text-white">
              {edit && (
                <button
                  className={classNames(
                    "w-6 h-6 text-black rounded-md bg-white"
                  )}
                  onClick={() =>
                    dispatch(
                      decrementProducts({
                        id: products._id,
                      })
                    )
                  }
                >
                  -
                </button>
              )}
              <p>{products.quantity}</p>
              {edit && (
                <button
                  className={classNames(
                    "w-6 h-6 text-black rounded-md bg-white"
                  )}
                  onClick={() =>
                    dispatch(
                      incrementProducts({
                        id: products._id,
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
    </>
  );
};

export default ProductInventory;
