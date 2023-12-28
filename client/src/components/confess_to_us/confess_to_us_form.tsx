import { useState } from "react";
import Subject from "./subject";
import Reason from "./reason";
import Details from "./details";

const ConfessToUsForm: React.FC = () => {
  const [subject, setSubject] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [details, setDetails] = useState<string>("");
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
          />
          <Reason
            reason={reason}
            onChangeReason={(value) => setReason(value)}
          />
          <Details
            details={details}
            onChangeDetails={(value) => setDetails(value)}
          />
          <button className="form__button" type="submit">
            Confess
          </button>
        </form>
      </div>
    </>
  );
};

export default ConfessToUsForm;
