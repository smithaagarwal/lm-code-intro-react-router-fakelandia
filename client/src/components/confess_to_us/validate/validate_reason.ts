const validateReason: (reason: string) => string[] = (reason) => {
  const errorMessages: string[] = [];
  if (!reason) errorMessages.push("Choose one of the options");
  return errorMessages;
};

export default validateReason;
