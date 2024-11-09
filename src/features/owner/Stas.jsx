function Stas({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;

  const numOfPropposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return <div>Stas</div>;
}

export default Stas;
