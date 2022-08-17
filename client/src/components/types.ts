export type TodoListItemStatus = "Completed" | "Still due" | "Overdue";

export type TodoListItem = {
  id?: number;
  content: string;
  dueDateTime?: string;
  status?: TodoListItemStatus;
  completed?: boolean;
};
