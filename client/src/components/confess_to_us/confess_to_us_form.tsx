import { useState, useMemo, useContext } from "react";
import Subject from "./subject";
import Reason from "./reason";
import Details from "./details";
import validateSubject from "./validate/validate_subject";
import validateReason from "./validate/validate_reason";
import validateDetails from "./validate/validate_details";
import {
  Misdemeanour,
  MisdemeanourKind,
} from "../../types/misdemeanours.types";
import { ParentDataContext } from "../parent_data_provider";
import { useNavigate } from "react-router-dom";
import UserMessage from "./user_message";

const ConfessToUsForm: React.FC = () => {
  const [subject, setSubject] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const parentData = useContext(ParentDataContext);
  const navigate = useNavigate();
  const allValuesCorrect = useMemo(
    () =>
      validateSubject(subject).length === 0 &&
      validateDetails(details).length === 0 &&
      validateReason(reason).length === 0,
    [subject, reason, details]
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      subject: subject,
      reason: reason,
      details: details,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const url = "http://localhost:3000/api/confess";
      const response = await fetch(url, requestOptions);
      const json = await response.json();

      if (json.success && !json.justTalked) {
        const newMisdemeanour: Misdemeanour = {
          citizenId: Math.floor(Math.random() * 90000) + 10000,
          misdemeanour: reason as MisdemeanourKind,
          date: new Date().toJSON().slice(0, 10).split("-").reverse().join("/"),
          isSelfAdded: true,
        };
        parentData.addMisdemeanour(newMisdemeanour);
        navigate("/Misdemeanours");
      } else if (json.justTalked) {
        setShowMessage(true);
        setMessage("Thank you for talking to us!");
      } else {
        setShowMessage(true);
        setMessage(
          "Sorry, there was an error submitting the form.Please try again!"
        );
      }
    } catch (e) {
      console.error(e);
    }
  };
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
        {!showMessage && (
          <form className="form" role="confessToUsForm" onSubmit={handleSubmit}>
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
        )}
        {showMessage && <UserMessage message={message} />}
      </div>
    </>
  );
};

export default ConfessToUsForm;
