import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import DasboardHeader from "./DasboardHeader";
import Stas from "./Stas";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DasboardHeader />
      <Stas projects={projects} />
    </div>
  );
}

export default DashboardLayout;
