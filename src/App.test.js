import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const buttonElement = screen.getByText("TEST MY CODE");
  expect(buttonElement).toBeInTheDocument();
});
