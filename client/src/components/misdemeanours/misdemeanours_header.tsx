import SelectMisdemeanour from "./select_misdemeanour";

interface MisdemeanoursHeaderProp {
  filterMisdemeanours: (filter: string) => void;
}
const MisdemeanoursHeader: React.FC<MisdemeanoursHeaderProp> = ({
  filterMisdemeanours,
}) => (
  <>
    <tr>
      <th scope="col">Citizen ID</th>
      <th scope="col">Date</th>
      <th scope="col">
        Misdemeanour
        <SelectMisdemeanour filterMisdemeanours={filterMisdemeanours} />
      </th>
    </tr>
  </>
);

export default MisdemeanoursHeader;
