import ErrorMessage from "./error_message";
export interface SubjectProps {
  subject: string;
  onChangeSubject: (e: string) => void;
  validate: (name: string) => string[];
}
const Subject: React.FC<SubjectProps> = ({
  subject,
  onChangeSubject,
  validate,
}) => {
  return (
    <>
      <div className="form__field">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(event) => onChangeSubject(event.target.value)}
        />
        <ErrorMessage messages={validate(subject)} />
      </div>
    </>
  );
};
export default Subject;
