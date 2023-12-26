import { useContext } from "react";
import { MisdemeanoursContext } from "./misdemeanours_container";
import Misdemeanour from "./single_misdemeanour";
const MisdemeanoursList: React.FC = ({}) => {
  const misdemeanours = useContext(MisdemeanoursContext);
  return (
    <>
      {misdemeanours.map((misdemeanour) => (
        <Misdemeanour
          key={misdemeanour.citizenId}
          misdemeanour={misdemeanour}
        />
      ))}
    </>
  );
};

export default MisdemeanoursList;
