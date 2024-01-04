import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { describe } from "node:test";
import Header from "./header";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  test("When the component is rendered, then the header text should be present", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const someText = screen.getByText("Fakelandia Justice Department");
    expect(someText).toBeInTheDocument();
  });
});
