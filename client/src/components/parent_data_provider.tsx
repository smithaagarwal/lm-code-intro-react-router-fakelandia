import { ReactNode, createContext, useState } from "react";
import { MisdemeanoursResponse } from "./misdemeanours/misdemeanours_container";
import { Misdemeanour } from "../types/misdemeanours.types";

interface ParentData {
  misdemeanours: MisdemeanoursResponse;
  addMisdemeanour: (newMisdemeanour: Misdemeanour) => void;
  updateMisdemeanours: (misdemeanours: MisdemeanoursResponse) => void;
}
export const ParentDataContext = createContext<ParentData>({
  misdemeanours: [],
  addMisdemeanour: () => {},
  updateMisdemeanours: () => {},
});

export const ParentData: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [misdemeanours, setMisdemeanours] = useState<MisdemeanoursResponse>([]);
  const addMisdemeanour = (newMisdemeanour: Misdemeanour) => {
    setMisdemeanours((misdemeanours) => [...misdemeanours, newMisdemeanour]);
  };
  const updateMisdemeanours = (misdemeanours: MisdemeanoursResponse) => {
    setMisdemeanours(misdemeanours);
  };
  const parentData = {
    misdemeanours: misdemeanours,
    addMisdemeanour: addMisdemeanour,
    updateMisdemeanours: updateMisdemeanours,
  };
  return (
    <ParentDataContext.Provider value={parentData}>
      {children}
    </ParentDataContext.Provider>
  );
};
