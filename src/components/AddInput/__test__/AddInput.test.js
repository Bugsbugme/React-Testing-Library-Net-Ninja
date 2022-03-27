import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetToDo = jest.fn();

describe("AddInput", () => {
  test("should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input", async () => {
    render(<AddInput todos={[]} setTodos={mockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } });
    expect(inputElement.value).toBe("Go grocery shopping");
  });

  test("input should be empty after adding new task", async () => {
    render(<AddInput todos={[]} setTodos={mockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
