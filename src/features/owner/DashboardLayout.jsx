import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import DasboardHeader from "./DasboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DasboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
