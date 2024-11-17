import { HiCollection, HiHome, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <li>
          <CustomNavLink to="dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="users">
            <HiUser />
            <span>کاربران</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="projects">
            <HiOutlineViewGrid />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="proposals">
            <HiCollection />
            <span>درخواست ها</span>
          </CustomNavLink>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
