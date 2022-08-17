import axios from "axios";
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { TodoItem } from "./TodoItem";
import { TodoListItem } from "./types";

type TodoListProps = {
  items: TodoListItem[];
  itemToggled: (itemId: number) => void;
};

export const TodoList = (props: TodoListProps) => {
  const { items, itemToggled } = props;

  return (
    <>
      <div>
        {items.map((item, index) => (
          <div class="mb-2">
            <TodoItem
              key={`todoitem-${index}`}
              item={item}
              clickCheckbox={itemToggled}
            />
          </div>
        ))}
      </div>
    </>
  );
};
