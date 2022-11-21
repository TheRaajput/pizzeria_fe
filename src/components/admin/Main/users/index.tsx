import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { UserTableHeader } from "../../../../helpers/admin";
import { deleteUser, getUsers } from "../../../../services/admin";
import CustomTable from "../../../shared/customTable";
import { useSelector } from "react-redux";
import { useNotifications } from "reapop";

const Users = () => {
  const token = useSelector((state: any) => state.auth.token);
  const { notify } = useNotifications();
  const [userData, setUserData] = useState<any>(true);
  const { isFetching, refetch } = useQuery(["users"], () => getUsers(token), {
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (data: any) => {
      setUserData(data.data);
    },
  });
  const { mutate } = useMutation(deleteUser, {
    onSuccess: () => {
      refetch();
      notify("User deleted", { status: "success" });
    },
  });
  return (
    <div className="w-3/4 px-4 mt-16 space-y-10 overflow-y-auto text-white">
      <h1 className="text-2xl font-bold text-center">User</h1>
      <CustomTable tableHeader={UserTableHeader}>
        {!isFetching &&
          userData &&
          userData.map(({ _id, name, email, contact_number, role }: any) => (
            <tr
              key={_id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{name}</td>
              <td className="px-6 py-4">{email}</td>
              <td className="px-6 py-4">{contact_number}</td>
              <td className="px-6 py-4">{role}</td>
              <td className="px-5 py-4 text-blue-700">
                <button onClick={() => mutate(_id)}>Delete</button>
              </td>
            </tr>
          ))}
      </CustomTable>
    </div>
  );
};

export default Users;
