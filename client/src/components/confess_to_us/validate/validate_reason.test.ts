import validateReason from "./validate_reason";

describe("test function validateReason", () => {
  test("should give appropriate error messages when reason is not selected", () => {
    const sampleErrorText = "Choose one of the options";
    const reason = "";
    expect(validateReason(reason).indexOf(sampleErrorText)).toBeGreaterThan(-1);
  });

  test("should not return any error if reason is selected", () => {
    expect(validateReason("rude").length).toBe(0);
  });
});
