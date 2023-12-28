import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Details, { DetailsProps } from "./details";

import { describe } from "node:test";

describe("Details component", () => {
  test("Given the required props, when the component is rendered, then the input text should be present", () => {
    //Arange
    const sampleDetailsProps: DetailsProps = {
      details: "Here are the details",
      onChangeDetails: () => {},
      validate: (value: string) => [],
    };
    //Act
    render(<Details {...sampleDetailsProps} />);
    const someInputText = screen.getByText("Here are the details");
    expect(someInputText).toBeInTheDocument();
  });
});
