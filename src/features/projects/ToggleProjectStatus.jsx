import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const enabled = project.status === "OPEN" ? true : false;

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ data: { status: newStatus }, id: project._id });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          enabled={enabled}
          Label={project.status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
