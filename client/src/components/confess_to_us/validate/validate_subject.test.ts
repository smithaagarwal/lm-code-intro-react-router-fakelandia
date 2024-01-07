import validateSubject from "./validate_subject";

describe("test function validateSubject", () => {
  test("should give appropriate error messages when subject is entered", () => {
    const sampleErrorText = "*Subject is mandatory";
    expect(validateSubject("").indexOf(sampleErrorText)).toBeGreaterThan(-1);
  });
  test("should give appropriate error messages when subject entered", () => {
    const sampleErrorText =
      "Subject name can only contain alphabets,numbers or space";
    expect(validateSubject("asn&").indexOf(sampleErrorText)).toBeGreaterThan(
      -1
    );
  });

  test("should give appropriate error messages when subject entered", () => {
    const sampleErrorText =
      "Subject length should be between 3 and 40 characters";
    expect(validateSubject("xa").indexOf(sampleErrorText)).toBeGreaterThan(-1);
  });
  test("should not return any error if valid subject is ntered", () => {
    expect(validateSubject("My confession").length).toBe(0);
  });
});
