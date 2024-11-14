import { useRef } from "react";

type Props = {
  addTodo: (title: string) => void;
};
const TodoInput = ({ addTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
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
  );
};

export default TodoInput;
