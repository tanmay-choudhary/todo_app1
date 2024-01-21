import { useDispatch, useSelector } from "react-redux";
import { addTodo, setVisibilityFilter } from "../src/redux/actions";
import AddTodo from "@/components/AddTodo";
import Tab from "@/components/Tab";
import Tado from "@/components/Todo";
import React, { useState, useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  useEffect(() => {
    //console.log(todos);
  }, [todos]);

  return (
    <div className="allign-center mt-20 ml-40 mr-40 mb-10 shadow-xl rounded-lg bg-gray-150 ">
      <AddTodo onAddTodo={(text) => dispatch(addTodo(text))} />
      <Tab
        setVisibilityFilter={(filter) => dispatch(setVisibilityFilter(filter))}
      />

      <div className="mr-40 ml-40 border border-red-800">
        {todos.map((todo) => {
          if (
            visibilityFilter === "ALL_TASKS" ||
            (visibilityFilter === "ACTIVE" && todo.active) ||
            (visibilityFilter === "COMPLETED" && !todo.active)
          ) {
            return <Tado key={todo.id} todo={todo} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
