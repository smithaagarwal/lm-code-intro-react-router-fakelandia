import { useState, useEffect, createContext, useContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import MisdemeanoursList from "./misdemeanours_list";
import useFetchData from "../../helper/use_fetch_data";
import MisdemeanoursHeader from "./misdemeanours_header";
import { ParentDataContext } from "../parent_data_provider";

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
  const parentData = useContext(ParentDataContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (parentData.misdemeanours.length === 0) {
          const response = await fetch(url);
          const json = await response.json();
          setMisdemeanours(json.misdemeanours);
          parentData.updateMisdemeanours(json.misdemeanours);
        } else {
          setMisdemeanours(parentData.misdemeanours);
        }
      } catch (error) {
        console.log("Error Fetching data", error);
      }
    };
    fetchData();
  }, [parentData]);

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
        <tbody>
          <MisdemeanoursContext.Provider
            value={isFilterSelected ? filteredMisdemeanours : misdemeanours}
          >
            <MisdemeanoursHeader filterMisdemeanours={filterMisdemeanours} />
            <MisdemeanoursList />
          </MisdemeanoursContext.Provider>
        </tbody>
      </table>
    </>
  );
};

export default MisdemeanoursContainer;
