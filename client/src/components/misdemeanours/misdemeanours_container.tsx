import { useState, useEffect, createContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import MisdemeanoursList from "./misdemeanours_list";
import useFetchData from "../../helper/use_fetch_data";
import MisdemeanoursHeader from "./misdemeanours_header";

export type MisdemeanoursResponse = Array<Misdemeanour>;
export const MisdemeanoursContext = createContext<MisdemeanoursResponse>([]);

const url = "http://localhost:3000/api/misdemeanours/8";
const MisdemeanoursContainer: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<MisdemeanoursResponse>([]);
  const [filteredMisdemeanours, setFilteredMisdemeanours] =
    useState<MisdemeanoursResponse>([]);
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  // const response = useFetchData(url);
  // setMisdemeanours(response.data)
  // console.log(response);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setMisdemeanours(json.misdemeanours);
      } catch (error) {
        console.log("Error Fetching data", error);
      }
    };
    fetchData();
  }, []);

  const filterMisdemeanours = (filter: string) => {
    if (filter === "All") {
      setIsFilterSelected(false);
    } else {
      const filteredResults = misdemeanours.filter(
        (item) => item.misdemeanour === filter
      );
      setFilteredMisdemeanours(filteredResults);
      setIsFilterSelected(true);
    }
  };

  return (
    <>
      <h2>Misdemeanours:</h2>
      <table>
        <MisdemeanoursContext.Provider
          value={isFilterSelected ? filteredMisdemeanours : misdemeanours}
        >
          <MisdemeanoursHeader filterMisdemeanours={filterMisdemeanours} />
          <MisdemeanoursList />
        </MisdemeanoursContext.Provider>
      </table>
    </>
  );
};

export default MisdemeanoursContainer;
