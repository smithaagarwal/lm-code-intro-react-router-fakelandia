import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reason, { ReasonProps } from "./reason";

import { describe } from "node:test";

describe("Reason component", () => {
  test("Given the required props, when the component is rendered, then the label should be present", () => {
    //Arange
    const sampleReasonProps: ReasonProps = {
      reason: "",
      onChangeReason: () => {},
      validate: () => ["Choose one of the options"],
    };
    //Act
    render(<Reason {...sampleReasonProps} />);
    const someLabelText = screen.getByText("Reason for contact:");
    const someErrorText = screen.getByText("Choose one of the options");
    expect(someLabelText).toBeInTheDocument();
    expect(someErrorText).toBeInTheDocument();
  });

  test("Given the required props, when the component is rendered, then the input text should be present", () => {
    //Arange
    const sampleReasonProps: ReasonProps = {
      reason: "just-talk",
      onChangeReason: () => {},
      validate: () => [],
    };
    //Act
    render(<Reason {...sampleReasonProps} />);
    const someInputText = screen.getByDisplayValue("I just want to talk");
    expect(someInputText).toBeInTheDocument();
  });
});
