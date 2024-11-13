import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import DasboardHeader from "./DasboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DasboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
