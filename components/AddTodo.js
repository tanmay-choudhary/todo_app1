import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../src/redux/actions";
import { generateUniqueId } from "@/helpers/functions";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddTodo = () => {
    if (input.trim() === "") {
      setErrorMessage("Please enter a task");
      return;
    }

    dispatch(addTodo(input, generateUniqueId));
    setInput("");
    setErrorMessage("");
  };

  return (
    <>
      <div className="flex    items-center justify-center space-x-4">
        <input
          type="text"
          id="input"
          placeholder="   Type Text..."
          className="w-full pl-8 bg-white border border-gray-200 h-10 rounded-lg focus:ring ring-blue-200"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="p-3 rounded-lg bg-blue-500 text-white"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </>
  );
}

export default AddTodo;
