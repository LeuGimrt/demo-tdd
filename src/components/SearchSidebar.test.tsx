import { cleanup, render, screen } from "@testing-library/react";
import SearchSidebar from "./SearchSidebar";

describe("SearchSidebar", () => {
  beforeEach(() => {
    render(<SearchSidebar />);
  });
  afterEach(() => {
    cleanup();
  });
  it("should render the search sidebar", () => {
    const element = screen.getByText(/Búsqueda de status/i);
    expect(element).toBeInTheDocument();
  });
  it("should render the input and button", () => {
    const input = screen.getByPlaceholderText("Ingrese el status...");
    const button = screen.getByRole("button");
    expect(input).toBeInTheDocument();
    expect(button).toHaveTextContent("Mostrar");
  });
});
