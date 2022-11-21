import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsBucket } from "react-icons/bs";
export const sideNavMenu = [
  {
    id: "inventory",
    icon: <AiOutlineShoppingCart className="text-xl" />,
    name: "Inventory",
  },
  {
    id: "users",
    icon: <FaUserAlt className="text-xl" />,
    name: "Users",
  },
  {
    id: "orders",
    icon: <BsBucket className="text-xl" />,
    name: "Orders",
  },
];

export const UserTableHeader = [
  {
    _id: "name",
    title: "Name",
  },
  {
    _id: "Email",
    title: "Email",
  },
  {
    _id: "contact_number",
    title: "Contact Number",
  },
  {
    _id: "Role",
    title: "Role",
  },
  {
    _id: "Action",
    title: "Action",
  },
];

export const ordersTableHeader = [
  {
    _id: "name",
    title: "Name",
  },
  {
    _id: "Email",
    title: "Email",
  },
  {
    _id: "contact_number",
    title: "Contact Number",
  },
  {
    _id: "status",
    title: "Status",
  },
];
