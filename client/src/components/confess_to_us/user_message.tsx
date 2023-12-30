interface UserMessageProp {
  message: string;
}
const UserMessage: React.FC<UserMessageProp> = ({ message }) => {
  return (
    <div className="message__text">
      <p>{message}</p>
    </div>
  );
};
export default UserMessage;
