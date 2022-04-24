import { render, screen } from "@testing-library/react";
import { Login } from "./index";

test("Encontrar label username", () => {
  render(<Login />);
  expect(screen.getByText("Username")).toHaveAttribute("class", "test") ;
});
