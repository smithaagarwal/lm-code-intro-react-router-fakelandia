export interface DetailsProps {
  details: string;
  onChangeDetails: (e: string) => void;
}
const Details: React.FC<DetailsProps> = ({ details, onChangeDetails }) => (
  <>
    <div className="form__textarea ">
      <textarea
        className=""
        id="details"
        name="details"
        value={details}
        rows={5}
        cols={50}
        onChange={(e) => onChangeDetails(e.target.value)}
      />
    </div>
  </>
);

export default Details;
