import { render, screen } from "@testing-library/react";
import Racing from "./racing";

test("renders racing component", () => {
  render(<Racing />);
  expect(screen.getByText("🏁 Simple Racing Game")).toBeInTheDocument();
});
