import jotaiLogo from "@/assets/jotai.svg";
import { useAtom } from "jotai";
import todoAtom from "./atoms/todoAtom";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";

const JotaiTodoList = () => {
  const [todos, setTodos] = useAtom(todoAtom);
  const inputRef = useRef<HTMLInputElement>(null);
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

  const changeTodoName = (id: string, value: string) => {
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
          <div className="flex">
            <input
              ref={inputRef}
              className="text-2xl bg-gray-100 p-2 outline-none h-14 flex-grow"
            />
            <button
              className="bg-gray-300 h-14 w-14 text-2xl"
              onClick={() => {
                addTodo(inputRef?.current?.value ?? "");
              }}
            >
              +
            </button>
          </div>
          <div className="mt-10 flex flex-col">
            {todos.map((todo) => {
              return (
                <div className="flex justify-between bg-gray-100 p-4 rounded mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={todo.state}
                      onChange={() => {
                        toggleTodoState(todo.id);
                      }}
                      className="mr-4 h-5 w-5"
                    />
                    {todo.isEdit ? (
                      <input
                        value={todo.name}
                        onChange={(event) => {
                          changeTodoName(todo.id, event.target.value);
                        }}
                        className="text-2xl bg-gray-100 outline-none flex-grow"
                      />
                    ) : (
                      <p
                        className={twMerge(
                          "text-2xl",
                          todo.state ? "line-through" : ""
                        )}
                      >
                        {todo.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      className="text-2xl mr-2"
                      onClick={() => {
                        toggleIsEdit(todo.id);
                      }}
                    >
                      {todo.isEdit ? "✅" : "📝"}
                    </button>
                    <button
                      className="text-2xl"
                      onClick={() => {
                        deleteTodo(todo.id);
                      }}
                    >
                      ✖
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JotaiTodoList;
