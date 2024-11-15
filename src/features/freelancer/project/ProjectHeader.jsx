import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  { value: "latest", label: "مرتب سازی ( جدید ترین )" },
  { value: "earliest", label: "مرتب سازی ( قدیمی ترین )" },
];

const statusOptions = [
  {
    value: "ALL",
    label: "همه",
  },
  {
    value: "OPEN",
    label: "باز",
  },
  {
    value: "CLOSED",
    label: "بسته",
  },
];

function ProjectHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div className="flex gap-x-8 items-center">
        <Filter filterFiled="status" options={statusOptions} />
        <FilterDropDown filterFiled="sort" options={sortOptions} />
        <FilterDropDown
          filterFiled="category"
          options={[
            { value: "ALL", label: "دسته بندی ( همه )" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
