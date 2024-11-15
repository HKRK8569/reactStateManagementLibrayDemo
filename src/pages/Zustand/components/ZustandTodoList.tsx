import TodoInput from "@/components/TodoInput";

import TodoItem from "@/components/TodoItem";
import useTodoStore from "../stores/todoStore";

const ZustandTodoList = () => {
  const {
    todos,
    addTodo,
    changeTodoTitle,
    toggleIsEdit,
    toggleTodoState,
    deleteTodo,
  } = useTodoStore((state) => state);

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <div className="mt-10 flex flex-col">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              changeTodoTitle={changeTodoTitle}
              toggleIsEdit={toggleIsEdit}
              toggleTodoState={toggleTodoState}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </>
  );
};

export default ZustandTodoList;
