import { render, screen } from "@testing-library/react";
import App from "./App";

test("App loads without crashing", () => {
  render(<App />);
  const heading = screen.getByText(/hello/i);
  expect(heading).toBeInTheDocument();
});
