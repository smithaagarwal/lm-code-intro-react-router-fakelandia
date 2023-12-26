import { Misdemeanour } from "../../types/misdemeanours.types";

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
      </tr>
    </>
  );
};

export default SingleMisdemeanour;
