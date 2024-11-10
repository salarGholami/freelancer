import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

function FreelancerLayout() {
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
          <CustomNavLink to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="proposals">
            <HiCollection />
            <span>درخواست هاا</span>
          </CustomNavLink>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
