export interface ErrorMessageProps {
  messages: string[];
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ messages }) =>
  messages && messages.length > 0 ? (
    <>
      {messages.map((message) => (
        <div className="error__message">{message}</div>
      ))}
    </>
  ) : null;

export default ErrorMessage;
