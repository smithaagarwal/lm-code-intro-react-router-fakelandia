const validateDetails: (details: string) => string[] = (details) => {
  const errorMessages: string[] = [];
  if (details.length == 0) errorMessages.push("*Subject is mandatory");
  else if (details.length < 17 || details.length > 153)
    errorMessages.push("Details must be between 17 and 153 characters long");
  return errorMessages;
};

export default validateDetails;
