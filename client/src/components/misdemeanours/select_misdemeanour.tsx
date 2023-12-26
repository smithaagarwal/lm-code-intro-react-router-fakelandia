import { useState } from "react";
import { MISDEMEANOURS } from "../../types/misdemeanours.types";
interface SelectMisdemeanourProp {
  filterMisdemeanours: (filter: string) => void;
}
const SelectMisdemeanour: React.FC<SelectMisdemeanourProp> = ({
  filterMisdemeanours,
}) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const handleChange = (chosenFilter: string) => {
    setSelectedFilter(chosenFilter);
    filterMisdemeanours(chosenFilter);
  };

  return (
    <>
      <select
        value={selectedFilter}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">Filter</option>
        <option value="All">All</option>
        {MISDEMEANOURS.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </>
  );
};

export default SelectMisdemeanour;
