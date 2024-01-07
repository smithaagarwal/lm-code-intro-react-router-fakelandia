const validateSubject: (subject: string) => string[] = (subject) => {
  const errorMessages: string[] = [];
  if (subject.length == 0) errorMessages.push("*Subject is mandatory");
  else {
    if (!/^[a-zA-Z0-9 ]+$/.test(subject))
      errorMessages.push(
        "Subject name can only contain alphabets,numbers or space"
      );
    if (subject.length < 3 || subject.length > 40)
      errorMessages.push(
        "Subject length should be between 3 and 40 characters"
      );
  }
  return errorMessages;
};

export default validateSubject;
