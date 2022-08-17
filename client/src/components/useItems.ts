import axios from "axios";
import { useState, useEffect } from "preact/hooks";
import { TodoListItem } from "./types";

export const useItems = () => {
  const [items, setItems] = useState<TodoListItem[]>([]);

  useEffect(() => {
    axios
      .get<TodoListItem[]>("http://localhost:3000/todo-items")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleCompleted = (itemId: number) => {
    const item = items.find((item) => item.id === itemId);
    axios
      .post(`http://localhost:3000/todo-items/${itemId}`, {
        ...item,
        completed: !item!.completed,
      })
      .then((res) =>
        setItems([...items.filter((i) => i.id !== itemId), res.data])
      )
      .catch((err) => console.log(err));
  };

  const addItem = (item: TodoListItem) => {
    axios.post("http://localhost:3000/todo-items", item).then((res) => {
      setItems([...items, res.data]);
    });
  };

  return { items, toggleCompleted, addItem };
};
