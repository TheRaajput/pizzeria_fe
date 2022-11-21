import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/slices/Auth";
import { useJwt } from "react-jwt";
import { resetCart } from "../../redux/slices/cart";
import { resetInventory } from "../../redux/slices/inventory";
import { resetUser } from "../../redux/slices/users";

const Navbar = () => {
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.auth.token);
  const { decodedToken } = useJwt<any>(token);
  const dispatch = useDispatch();
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between w-full p-4 shadow-md bg-white/80 backdrop-blur-md">
      <div className="flex items-center cursor-pointer">
        <Link to="/" className="text-xl font-medium text-blue-500">
          Pizzeria
        </Link>
      </div>

      {token && (
        <div className="flex items-center">
          {decodedToken?.role === "admin" && (
            <Link
              to="/dashboard/inventory"
              className="mr-10 text-xl font-medium text-gray-600"
            >
              Dashboard
            </Link>
          )}
          <Link
            to="/orders"
            className="mr-10 text-xl font-medium text-gray-600"
          >
            Orders
          </Link>
          <button
            onClick={() => {
              dispatch(logOut());
              dispatch(resetCart());
              dispatch(resetInventory());
              dispatch(resetUser());
              navigate("/login");
            }}
            className="flex font-semibold text-gray-600 transition-colors duration-300 cursor-pointer hover:text-blue-600"
          >
            <FiLogIn className="my-auto mr-2 text-xl" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
