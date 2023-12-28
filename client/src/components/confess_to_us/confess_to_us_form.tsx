import { useState, useMemo } from "react";
import Subject from "./subject";
import Reason from "./reason";
import Details from "./details";
import validateSubject from "./validate/validate_subject";
import validateReason from "./validate/validate_reason";
import validateDetails from "./validate/validate_details";

const ConfessToUsForm: React.FC = () => {
  const [subject, setSubject] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const allValuesCorrect = useMemo(
    () =>
      validateSubject(subject).length === 0 &&
      validateDetails(details).length === 0 &&
      validateReason(reason).length === 0,
    [subject, reason, details]
  );

  return (
    <>
      <div>
        <p className="form__intro">
          It's very difficult to catch people committing misdemeanours so we
          appreciate it when citizen confess to us directly.
        </p>

        <p className="form__intro">
          However, if you're just having a hard day and need to vent then you're
          welcome to contact us here too. Up to you!
        </p>
        <form className="form">
          <Subject
            subject={subject}
            onChangeSubject={(value) => setSubject(value)}
            validate={validateSubject}
          />
          <Reason
            reason={reason}
            onChangeReason={(value) => setReason(value)}
            validate={validateReason}
          />
          <Details
            details={details}
            onChangeDetails={(value) => setDetails(value)}
            validate={validateDetails}
          />
          <button
            className="form__button"
            type="submit"
            disabled={!allValuesCorrect}
          >
            Confess
          </button>
        </form>
      </div>
    </>
  );
};

export default ConfessToUsForm;
