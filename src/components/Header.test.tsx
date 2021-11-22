import { cleanup, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });
  afterEach(() => {
    cleanup();
  });
  it("should render the navigation bar", () => {
    const element = screen.getByRole("navigation");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/HTTP States/i);
  });
});
