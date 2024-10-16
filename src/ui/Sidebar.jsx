import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNaveLink to="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNaveLink>
        </li>
        <li>
          <CustomNaveLink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNaveLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNaveLink({ children, to }) {
  const navLinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${navLinkClass} bg-primary-100/50 text-primary-900`
          : `${navLinkClass} text-secondary-600`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
