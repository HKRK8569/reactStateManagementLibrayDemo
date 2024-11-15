import { useRecoilState } from "recoil";
import todoState from "../atoms/TodoState";

const useTodoList = () => {
  const [todos, setTodos] = useRecoilState(todoState);

  const changeTodoTitle = (id: string, title: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title,
            }
          : todo
      )
    );
  };

  const toggleTodoState = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              state: !todo.state,
            }
          : todo
      )
    );
  };

  const addTodo = (value: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: value,
        isEdit: false,
        state: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleIsEdit = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEdit: !todo.isEdit,
            }
          : todo
      )
    );
  };

  return {
    todos,
    changeTodoTitle,
    addTodo,
    deleteTodo,
    toggleIsEdit,
    toggleTodoState,
  };
};

export default useTodoList;