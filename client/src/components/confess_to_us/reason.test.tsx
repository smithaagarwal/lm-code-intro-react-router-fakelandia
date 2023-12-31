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
      validate: (value: string) => [],
    };
    //Act
    render(<Reason {...sampleReasonProps} />);
    const someLabelText = screen.getByText("Reason for contact:");
    expect(someLabelText).toBeInTheDocument();
  });

  test("Given the required props, when the component is rendered, then the input text should be present", () => {
    //Arange
    const sampleReasonProps: ReasonProps = {
      reason: "just-talk",
      onChangeReason: () => {},
      validate: (value: string) => [],
    };
    //Act
    render(<Reason {...sampleReasonProps} />);
    const someInputText = screen.getByDisplayValue("I just want to talk");
    expect(someInputText).toBeInTheDocument();
  });
});
