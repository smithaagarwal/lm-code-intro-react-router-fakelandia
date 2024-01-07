import { screen, render } from "@testing-library/react";
import Nav from "./header";
import { BrowserRouter } from "react-router-dom";

test("When the component renders, the nav should be present", () => {
  render(<Nav />, { wrapper: BrowserRouter });
  const someNav = screen.getByText("Misdemeanours");

  expect(someNav).toBeInTheDocument();
});
