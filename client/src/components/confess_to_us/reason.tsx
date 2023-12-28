import ErrorMessage from "./error_message";
import {
  MisdemeanourKind,
  MISDEMEANOURS,
} from "../../types/misdemeanours.types";
export interface ReasonProps {
  reason: string;
  onChangeReason: (e: string) => void;
  validate: (name: string) => string[];
}
const Reason: React.FC<ReasonProps> = ({
  reason,
  onChangeReason,
  validate,
}) => (
  <>
    <div className="form__field">
      <label htmlFor="reason">Reason for contact:</label>
      <select
        id="reason"
        name="reason"
        value={reason}
        onChange={(e) => onChangeReason(e.target.value)}
      >
        <option value="">--Select--</option>
        <option value="talk"> I just want to talk </option>
        {MISDEMEANOURS.map((item: MisdemeanourKind) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <ErrorMessage messages={validate(reason)} />
    </div>
  </>
);

export default Reason;
