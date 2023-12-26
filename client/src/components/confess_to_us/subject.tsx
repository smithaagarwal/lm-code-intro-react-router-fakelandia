interface SubjectProps {
  subject: string;
  onChangeSubject: (e: string) => void;
}
const Subject: React.FC<SubjectProps> = ({ subject, onChangeSubject }) => {
  return (
    <>
      <div className="form__field">
        <label className="form__text form__label" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(event) => onChangeSubject(event.target.value)}
        />
      </div>
    </>
  );
};
export default Subject;
