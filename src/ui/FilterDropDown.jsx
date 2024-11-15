import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ options, filterFiled }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterFiled) || "";

  const handleChange = (e) => {
    searchParams.set(filterFiled, e.target.value);
    setSearchParams(searchParams);
  };
  return <Select onChange={handleChange} value={value} options={options}/>;
}

export default FilterDropDown;
