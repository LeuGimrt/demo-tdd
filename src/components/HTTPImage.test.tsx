import { cleanup, render, screen } from "@testing-library/react";
import HTTPImage from "./HTTPImage";

const status = "100";

describe("HTTPImage", () => {
  beforeEach(() => {
    render(<HTTPImage status={status} />);
  });
  afterEach(() => {
    cleanup();
  });
  it("should render the image card", () => {
    const element = screen.getByRole("figure");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(`Status ${status}`);
  });
  it("should render the image specified by status", () => {
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAccessibleName(`Status Cat ${status}`);
    expect(img).toHaveAttribute("src", `https://http.cat/${status}`);
  });
});
