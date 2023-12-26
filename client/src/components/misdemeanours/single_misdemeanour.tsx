import { Misdemeanour } from "../../types/misdemeanours.types";
import Punishment from "../punishment/punishment";

export interface SingleMisdemeanourProps {
  misdemeanour: Misdemeanour;
}
const SingleMisdemeanour: React.FC<SingleMisdemeanourProps> = ({
  misdemeanour: { citizenId, date, misdemeanour },
}) => {
  return (
    <>
      <tr>
        <td>{citizenId} </td>
        <td> {date} </td>
        <td> {misdemeanour}</td>
        <td>
          <Punishment num={citizenId} />
        </td>
      </tr>
    </>
  );
};

export default SingleMisdemeanour;
