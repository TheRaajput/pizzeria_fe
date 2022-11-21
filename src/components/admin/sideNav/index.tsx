import { NavLink } from "react-router-dom";
import { sideNavMenu } from "../../../helpers/admin";
import classNames from "classnames";

const SideNav = () => {
  return (
    <aside className="flex items-center w-1/4 h-screen" aria-label="Sidebar">
      <div className="w-full px-3 py-4 overflow-y-auto bg-gray-800 rounded-xl">
        <ul className="space-y-2">
          {sideNavMenu.map(({ id, name, icon }) => (
            <li key={id}>
              <NavLink
                to={`/dashboard/${id}`}
                className={({ isActive }) =>
                  classNames(
                    "flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700",
                    isActive && "bg-gray-700"
                  )
                }
              >
                {icon}
                <span className="ml-6">{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
