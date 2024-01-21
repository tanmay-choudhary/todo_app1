import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../src/redux/actions";

function Todos({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [editedActive, setEditedActive] = useState(todo.active);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const editedTodo = { ...todo, text: editedText, active: editedActive };
    dispatch(editTodo(editedTodo));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="mt-10 ml-40 mr-40 justify-between flex flex-col-3 bg-gray-200 rounded-lg">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              className="h-10 w-20 rounded-lg bg-green-500"
              checked={editedActive}
              onChange={() => setEditedActive(!editedActive)}
            />
            Active
          </label>
          <button
            className="h-10 w-20 rounded-lg bg-green-500"
            onClick={handleSave}
          >
            Save
          </button>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Todos;
