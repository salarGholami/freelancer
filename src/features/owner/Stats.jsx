import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./Stat";

function Stas({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;

  const numOfPropposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="blue"
        title="درخواست ها"
        value={numOfPropposals}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stas;
