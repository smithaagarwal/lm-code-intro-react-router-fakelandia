import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Subject, { SubjectProps } from "./subject";

import { describe } from "node:test";

describe("Subject component", () => {
  test("Given the required props, when the component is rendered, then the label and error message should be present", () => {
    //Arange
    const sampleSubjectProps: SubjectProps = {
      subject: "",
      onChangeSubject: () => {},
      validate: () => ["*Subject is mandatory"],
    };
    //Act
    render(<Subject {...sampleSubjectProps} />);
    const someLabelText = screen.getByText("Subject");
    const someErrorText = screen.getByText("*Subject is mandatory");
    expect(someLabelText).toBeInTheDocument();
    expect(someErrorText).toBeInTheDocument();
  });

  test("Given the required props, when the component is rendered, then the input text should be present", () => {
    //Arange
    const sampleSubjectProps: SubjectProps = {
      subject: "talk",
      onChangeSubject: () => {},
      validate: () => [],
    };
    //Act
    render(<Subject {...sampleSubjectProps} />);
    const someInputText = screen.getByDisplayValue("talk");
    expect(someInputText).toBeInTheDocument();
  });
});
