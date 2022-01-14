import { render, screen } from "@testing-library/react";
import App from "App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/You can create new User!/i);
  expect(linkElement).toBeInTheDocument();
});
