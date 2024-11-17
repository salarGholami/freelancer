import DasboardHeader from "../../ui/DasboardHeader";
// import Loading from "../../ui/Loading";

function DashboardLayout() {
  //   const { isLoading, proposals } = useProposals();

  //   if (isLoading) return <Loading />;

  return (
    <div>
      <DasboardHeader />
      {/* <Stats proposals={proposals} /> */}
    </div>
  );
}

export default DashboardLayout;
