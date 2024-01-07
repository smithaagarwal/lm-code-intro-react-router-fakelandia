import validateDetails from "./validate_details";

describe("test function validateDetails", () => {
  test("should give appropriate error messages when details entered", () => {
    const sampleErrorText = "*Details is mandatory";
    expect(validateDetails("").indexOf(sampleErrorText)).toBeGreaterThan(-1);
  });

  test("should give appropriate error messages when details entered", () => {
    const sampleErrorText =
      "Details must be between 17 and 153 characters long";
    expect(validateDetails("xyz").indexOf(sampleErrorText)).toBeGreaterThan(-1);
  });
  test("should not return any error if valid details are entered", () => {
    expect(validateDetails("details of the misdemeanour").length).toBe(0);
  });
});
