import { screen, render } from "@testing-library/react";
import Home from "./home";

describe("Home component", () => {
  test("When the component is rendered the text in the page should be present", () => {
    render(<Home />);
    const someText = screen.getByText(
      "Here you can browse a list of recent misdemeanours committed by our citizens, or you can confess to your own misdemeanours."
    );
    const someTextWithMisdemeanourCount = screen.getByText(
      "Total misdemeanours is 0"
    );
    expect(someText).toBeInTheDocument();
    expect(someTextWithMisdemeanourCount).toBeInTheDocument();
  });
});
