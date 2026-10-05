import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Royal Express brand in the hero", () => {
  render(<App />);
  expect(screen.getAllByText(/Royal Express LLC/i).length).toBeGreaterThan(0);
});
