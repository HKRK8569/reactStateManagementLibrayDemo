import jotaiLogo from "@/assets/jotai.svg";
import { useAtom } from "jotai";
import todoAtom from "./atoms/todoAtom";
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";

const Jotai = () => {
  const [todos, setTodos] = useAtom(todoAtom);

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
        name: value,
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

  const changeTodoTitle = (id: string, value: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              name: value,
            }
          : todo
      )
    );
  };

  return (
    <div>
      <div className="max-w-screen-md mx-auto">
        <header className="mt-20 flex flex-col items-center">
          <img src={jotaiLogo} className="h-20" alt="react logo" />
        </header>
        <div className="mt-10">
          <TodoInput addTodo={addTodo} />
          <div className="mt-10 flex flex-col">
            {todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  changeTodoTitle={changeTodoTitle}
                  toggleIsEdit={toggleIsEdit}
                  toggleTodoState={toggleTodoState}
                  deleteTodo={deleteTodo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jotai;
