import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../src/redux/actions";
import { generateUniqueId } from "@/helpers/functions";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(input, generateUniqueId));
    setInput("");
  };

  return (
    <>
      <div className="mt-20 ml-40 mr-40 mb-10 flex flex-col-2 ">
        <input
          type="text"
          id="input"
          placeholder="   Type Text..."
          className="mr-10 bg-white border border-grey-200 h-10  rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="h-10 w-20 rounded-lg bg-blue-500"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddTodo;
