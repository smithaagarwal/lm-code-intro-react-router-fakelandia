import React from "react";
import ErrorMessage from "./error_message";
export interface DetailsProps {
  details: string;
  onChangeDetails: (e: string) => void;
  validate: (name: string) => string[];
}
const Details: React.FC<DetailsProps> = ({
  details,
  onChangeDetails,
  validate,
}) => (
  <>
    <div className="form__field">
      <textarea
        id="details"
        name="details"
        value={details}
        rows={5}
        cols={50}
        onChange={(e) => onChangeDetails(e.target.value)}
      />
      <ErrorMessage messages={validate(details)} />
    </div>
  </>
);

export default Details;
