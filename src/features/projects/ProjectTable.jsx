import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  return <div>projec table</div>;
}

export default ProjectTable;
