import { twMerge } from "tailwind-merge";

export type Todo = {
  id: string;
  state: boolean;
  title: string;
  isEdit: boolean;
};

type Props = {
  todo: Todo;
  changeTodoTitle: (id: string, title: string) => void;
  toggleTodoState: (id: string) => void;
  toggleIsEdit: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoItem = ({
  todo,
  changeTodoTitle,
  toggleTodoState,
  toggleIsEdit,
  deleteTodo,
}: Props) => {
  return (
    <div className="flex justify-between bg-gray-100 p-4 rounded mb-4">
      <div className="flex items-center flex-grow">
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
            value={todo.title}
            onChange={(event) => {
              changeTodoTitle(todo.id, event.target.value);
            }}
            className="text-2xl bg-gray-100 outline-none flex-grow"
          />
        ) : (
          <p className={twMerge("text-2xl", todo.state ? "line-through" : "")}>
            {todo.title}
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
};

export default TodoItem;
