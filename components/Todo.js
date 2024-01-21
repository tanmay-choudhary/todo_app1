import React from "react";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../src/redux/actions";

function Todos({ todo }) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const editedTodo = { ...todo, text: "Edited Text" };
    dispatch(editTodo(editedTodo));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="mt-10 ml-40 mr-40 justify-between flex flex-col-3 border border-red-800">
      <h3>{todo.text}</h3>
      <button
        className="h-10 w-20 rounded-lg bg-green-500"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        className="h-10 w-20 rounded-lg bg-red-500"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Todos;
