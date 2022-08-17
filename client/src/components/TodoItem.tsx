import { h } from "preact";
import { TodoListItem } from "./types";

type TodoItemProps = {
  item: TodoListItem;
  clickCheckbox: (itemId: number) => void;
};

export const TodoItem = (props: TodoItemProps) => {
  const { item, clickCheckbox } = props;
  return (
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <input
              class="form-check-input"
              data-testid={`checkbox-${item.id}`}
              type="checkbox"
              checked={item.completed}
              onClick={() => clickCheckbox(item.id!)}
            />
          </div>
          <div class="col-10">
            {item.completed ? <del>{item.content}</del> : item.content}
          </div>
          <div class="col">
            <div
              class={`badge ${
                item.status == "Completed"
                  ? "text-bg-success"
                  : item.status == "Overdue"
                  ? "text-bg-danger"
                  : "text-bg-warning"
              }`}
            >
              {item.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
