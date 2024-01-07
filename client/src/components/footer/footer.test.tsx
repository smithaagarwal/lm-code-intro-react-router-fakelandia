import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { describe } from "node:test";
import Footer from "./footer";
import { BrowserRouter } from "react-router-dom";

describe("Footer component", () => {
  test("When the component is rendered, then the header text should be present", () => {
    render(<Footer />, { wrapper: BrowserRouter });
    const someText = screen.getByText("Copyright 2023 Fakelandia");
    expect(someText).toBeInTheDocument();
  });
});
