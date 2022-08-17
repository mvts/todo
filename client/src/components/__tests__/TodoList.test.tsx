import { h } from "preact";
import { TodoList } from "../TodoList";
import { TodoListItem } from "../types";
import { render, fireEvent, screen } from "@testing-library/preact";

const mockItem: TodoListItem = {
  id: 1,
  content: "mock item",
  status: "Still due",
  completed: false,
};

const itemToggledHandler = jest.fn();

describe("Todo List", () => {
  beforeEach(() => {
    render(<TodoList itemToggled={itemToggledHandler} items={[mockItem]} />);
  });

  it("should render", () => {
    expect(screen.findByText("mock item")).toBeTruthy();
  });

  it("should receive toggle event", () => {
    const checkbox = screen.getByTestId("checkbox-1");
    fireEvent.click(checkbox);

    expect(itemToggledHandler).toHaveBeenCalled();
  });
});
