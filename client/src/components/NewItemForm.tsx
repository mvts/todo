import { h } from "preact";
import { useState } from "preact/hooks";
import { TodoListItem } from "./types";

type NewItemFormProps = {
  addTodoClick: (item: TodoListItem) => void;
};

export const NewItemForm = (props: NewItemFormProps) => {
  const { addTodoClick } = props;
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState();

  const handleChangeText = (e: any) => setText(e.target.value);
  const handleChangeDueDate = (e: any) => setDueDate(e.target.value);
  return (
    <div class="row mb-2">
      <div class="col-7">
        <input
          type="text"
          value={text}
          onInput={handleChangeText}
          class="form-control"
        />
      </div>
      <div class="col-3">
        <div class="input-group">
          <span class="input-group-text">
            Due date
          </span>
          <input id="dueDate" type="date" class="form-control" value={dueDate} onInput={handleChangeDueDate} />
        </div>
      </div>
      <div class="col">
        <button
          class="btn btn-primary w-100"
          onClick={() => addTodoClick({ content: text, dueDateTime: dueDate })}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};
