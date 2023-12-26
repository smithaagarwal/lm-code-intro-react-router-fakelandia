export interface ReasonProps {
  reason: string;
  onChangeReason: (e: string) => void;
}
const Reason: React.FC<ReasonProps> = ({ reason, onChangeReason }) => (
  <>
    <div className="form__field">
      <label className="form__text form__label" htmlFor="reason">
        Reason for contact:
      </label>
      <select
        id="reason"
        name="reason"
        value={reason}
        onChange={(e) => onChangeReason(e.target.value)}
      >
        <option value="">--Select--</option>
        <option value="misdemeanour"> Misdemeanour </option>
        <option value="talk"> I just want to talk </option>
      </select>
    </div>
  </>
);

export default Reason;
