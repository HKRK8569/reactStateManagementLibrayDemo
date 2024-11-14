import { Todo } from "@/components/TodoItem";
import { create } from "zustand";

type Store = {
  todos: Todo[];
  addTodo: (value: string) => void;
  changeTodoTitle: (id: string, value: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodoState: (id: string) => void;
  toggleIsEdit: (id: string) => void;
};
const useTodoStore = create<Store>((set) => ({
  todos: [],
  addTodo: (title: string) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          name: title,
          isEdit: false,
          state: false,
        },
      ],
    })),
  changeTodoTitle: (id: string, title: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              name: title,
            }
          : todo
      ),
    })),
  deleteTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodoState: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              state: !todo.state,
            }
          : todo
      ),
    })),
  toggleIsEdit: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEdit: !todo.isEdit,
            }
          : todo
      ),
    })),
}));

export default useTodoStore;
