import { h } from "preact";
import { NewItemForm } from "./NewItemForm";
import { TodoList } from "./TodoList";
import { useItems } from "./useItems";

const App = () => {
  const { items, toggleCompleted, addItem } = useItems();

  return (
    <div class="container">
      <h2>Todo List</h2>
      <NewItemForm addTodoClick={addItem} />
      <TodoList items={items} itemToggled={toggleCompleted} />
    </div>
  );
};

export default App;
