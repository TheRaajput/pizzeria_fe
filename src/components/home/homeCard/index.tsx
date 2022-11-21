import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrement,
  increment,
  removeItem,
} from "../../../redux/slices/cart";
interface Props {
  id: string;
  quantity: number;
  name: string;
}
const HomeCard = ({ id, quantity, name }: Props) => {
  const cart = useSelector((state: any) => state.cart);
  const ind = cart.findIndex((item: any) => item.product_id === id);
  const quantityIncart = cart[ind]?.quantity;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-col justify-between p-5 md:flex-row">
        <button
          className="p-1 font-bold text-black bg-white rounded-md "
          onClick={() =>
            cart[ind]
              ? dispatch(removeItem(id))
              : dispatch(
                  addToCart({
                    product_id: id,
                    name: name,
                  })
                )
          }
        >
          {cart[ind] ? "Remove" : "Add"}
        </button>
        {cart[ind] && quantity !== 0 && (
          <div className="flex items-center justify-center mt-5 space-x-2 text-white lg:mt-0">
            <button
              className={classNames(
                "w-6 h-6 text-black rounded-md",
                quantityIncart <= 1 ? "bg-gray-500 cursor-auto" : "bg-white"
              )}
              onClick={() =>
                dispatch(
                  decrement({
                    product_id: id,
                    name: name,
                    quantity: quantityIncart,
                  })
                )
              }
            >
              -
            </button>
            <p>
              {quantityIncart > 0
                ? quantityIncart >= quantity
                  ? quantity
                  : quantityIncart
                : 0}
            </p>
            <button
              className={classNames(
                "w-6 h-6 text-black rounded-md",
                quantityIncart >= quantity ? "bg-gray-500" : "bg-white"
              )}
              onClick={() =>
                dispatch(
                  increment({
                    product_id: id,
                    name: name,
                    quantity: quantityIncart,
                  })
                )
              }
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCard;
