import classNames from "classnames";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNotifications } from "reapop";
import HomeCard from "../../components/home/homeCard";
import OrderModal from "../../components/home/orderModal";
import CustomCard from "../../components/shared/customCard";
import { resetCart } from "../../redux/slices/cart";
import { addtoInventory } from "../../redux/slices/inventory";
import { getInventory } from "../../services/admin";
import { placeOrder } from "../../services/home";

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);
  const cart = useSelector((state: any) => state.cart);
  const [productData, setProductData] = useState<any>([]);
  const { notify } = useNotifications();
  const { isFetching, refetch } = useQuery(
    ["inventory"],
    () => getInventory(token),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (data: any) => {
        setProductData(data.data[0].products);
        dispatch(addtoInventory(data.data[0]));
      },
      onError: () => {
        notify("Error fetching products");
      },
    }
  );
  const { mutate } = useMutation(placeOrder, {
    onSuccess: () => {
      dispatch(resetCart());
      refetch();
    },
  });
  return (
    <div
      className={classNames(
        "flex  mt-16 bg-black bg-opacity-90",
        isFetching ? "h-screen" : ""
      )}
    >
      <div className="p-10 rounded-lg bg-opacity-90">
        <div className="flex justify-between mb-4">
          <OrderModal />
          {cart.length > 0 && (
            <button
              onClick={() => mutate()}
              className="p-2 font-bold text-black bg-white rounded-md h-fit w-60"
            >
              Order
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-10 text-white lg:grid-cols-3">
          {!isFetching &&
            productData &&
            productData.map(
              (product: any) =>
                product.quantity > 0 && (
                  <CustomCard
                    key={product?._id}
                    name={product?.name}
                    image_url={product?.product_image}
                  >
                    <HomeCard
                      id={product?._id}
                      quantity={product.quantity}
                      name={product?.name}
                    />
                  </CustomCard>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default Home;
