import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import { BrowserRouter } from "react-router-dom";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import ConfessToUsForm from "./confess_to_us_form";

describe("ConfessToUsForm component ", () => {
  test("Confess to us form is rendered", () => {
    render(
      <BrowserRouter>
        <ConfessToUsForm />
      </BrowserRouter>
    );
    const someSampleText = screen.getByText(/Reason for contact/i);
    const someSampleText1 = screen.getByText(/Choose one of the options/i);
    expect(someSampleText).toBeDefined();
    expect(someSampleText1).toBeDefined();
  });

  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  const mockServer = setupServer();
  const responseData = {
    subject: "about lift",
    reason: "lift",
    details: "details here",
  };
  test("ConfessToUs form component with response", async () => {
    mockServer.use(
      http.post(
        "http://localhost:3000/api/confess",
        () => new HttpResponse(JSON.stringify(responseData))
      )
    );
    render(
      <BrowserRouter>
        <ConfessToUsForm />
      </BrowserRouter>
    );
    expect(
      await screen.findByText(/Details is mandatory/i)
    ).toBeInTheDocument();
  });

  test("shows the Confess button is present in the document", async () => {
    render(
      <BrowserRouter>
        <ConfessToUsForm />
      </BrowserRouter>
    );
    expect(screen.getByRole("button", { name: /Confess/i }));
  });

  describe("Form Submit", () => {
    test("test Confess Button is disabled", async () => {
      const onSubmitMock = vi.fn();
      const { container } = render(
        <BrowserRouter>
          <ConfessToUsForm />
        </BrowserRouter>
      );
      container.onsubmit = onSubmitMock;
      const submitButton = screen
        .getAllByRole("button")
        .find((button) => button.textContent === "Confess");
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });
  });

  describe("Form Submit", () => {
    test("test ConfessToUs form to check onSubmit function is called at button click", async () => {
      const onSubmitMock = vi.fn();

      const { container } = render(
        <BrowserRouter>
          <ConfessToUsForm />
        </BrowserRouter>
      );
      container.onsubmit = onSubmitMock;
      const form = screen.getByRole("confessToUsForm");
      fireEvent.submit(form);
      await waitFor(() => expect(onSubmitMock).toHaveBeenCalledTimes(1));
    });
  });
});
