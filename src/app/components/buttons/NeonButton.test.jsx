import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NeonButton from "./NeonButton";

describe("NeonButton Component", () => {
  test("renders button text", () => {
    render(<NeonButton>Neon</NeonButton>);
    expect(screen.getByText("Neon")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<NeonButton onClick={handleClick}>Click</NeonButton>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("disables button when loading", () => {
    render(<NeonButton isLoading>Loading</NeonButton>);
    const button = screen.getByText("Loading");
    expect(button).toBeDisabled();
  });

  test("renders spinner when loading", () => {
    render(<NeonButton isLoading>Loading</NeonButton>);
    expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
  });
});
