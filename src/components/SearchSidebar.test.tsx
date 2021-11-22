import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import SearchSidebar from "./SearchSidebar";

describe("SearchSidebar", () => {
  beforeEach(() => {
    render(<SearchSidebar setStatus={jest.fn} />);
  });
  afterEach(() => {
    cleanup();
  });
  it("should render the search bar title", () => {
    const element = screen.getByText(/Búsqueda de Status/i);
    expect(element).toBeInTheDocument();
  });
  it("should render the form with its components", () => {
    const button = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/Ingrese el status/i);

    expect(button).toHaveTextContent("Mostrar");
    expect(input).toBeInTheDocument();
  });
  it("should validate the input format on submit", () => {
    const input = screen.getByPlaceholderText(/Ingrese el status/i);
    const button = screen.getByRole("button");
    const errorMsg = screen.getByTestId("error-msg");

    fireEvent.change(input, { target: { value: "1234" } });
    fireEvent.click(button);
    expect(errorMsg).toBeVisible();
  });
});
