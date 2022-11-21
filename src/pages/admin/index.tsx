import { useParams } from "react-router-dom";
import Inventory from "../../components/admin/Main/inventory";
import Orders from "../../components/admin/Main/orders";
import Users from "../../components/admin/Main/users";
import SideNav from "../../components/admin/sideNav";

const Admin = () => {
  const { panel } = useParams();
  return (
    <div className="flex h-screen bg-black bg-opacity-90">
      <SideNav />
      {panel === "inventory" && <Inventory />}
      {panel === "users" && <Users />}
      {panel === "orders" && <Orders />}
    </div>
  );
};

export default Admin;
