import { screen, render } from "@testing-library/react";
import MainLayout from "./main_layouts";

import { BrowserRouter } from "react-router-dom";
test("Given the required props, When the component renders, Then the main content element should be present", () => {
  render(<MainLayout />, { wrapper: BrowserRouter });

  const someMainContent = screen.getByRole("main");

  expect(someMainContent).toHaveClass("main");
  expect(someMainContent).toBeInTheDocument();
});
