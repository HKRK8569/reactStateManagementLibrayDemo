import TodoInput from "@/components/TodoInput";
import useTodoList from "../../hooks/useTodoList";
import TodoItem from "@/components/TodoItem";

const JotaiTodoList = () => {
  const {
    todos,
    addTodo,
    changeTodoTitle,
    toggleIsEdit,
    toggleTodoState,
    deleteTodo,
  } = useTodoList();

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

export default JotaiTodoList;
