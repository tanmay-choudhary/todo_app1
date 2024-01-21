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
    <div className="mt-10  lg:flex lg:space-y-0 space-y-3 items-center justify-between px-3 py-2 bg-gray-200 rounded-lg">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="bg-white p-2 rounded-lg"
          />
          <div className="flex items-center px-3">
            {" "}
            <label>
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={editedActive}
                onChange={() => setEditedActive(!editedActive)}
              />
            </label>
            <span className="ml-2 "> Active</span>
          </div>
          <button
            className="h-10 w-20 rounded-lg bg-green-500"
            onClick={handleSave}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className="lg:max-w-md">{todo.text}</h3>
          <div className="space-x-4 ">
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
        </>
      )}
    </div>
  );
}

export default Todos;
