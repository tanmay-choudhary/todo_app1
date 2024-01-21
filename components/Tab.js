import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../src/redux/actions";

function Tab() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.visibilityFilter);

  const handleButtonClick = (filter) => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <div className="my-7 container mx-auto lg:w-[60%] justify-between flex flex-col-3">
      <button
        className={`lg:mr-10 mr-5 rounded-lg h-10 w-40 ${
          activeFilter === "ALL_TASKS" ? "bg-blue-400" : "bg-blue-100"
        }`}
        onClick={() => handleButtonClick("ALL_TASKS")}
      >
        All tasks
      </button>
      <button
        className={`lg:mr-10 mr-5 rounded-lg h-10 w-40 ${
          activeFilter === "ACTIVE" ? "bg-blue-400" : "bg-blue-100"
        }`}
        onClick={() => handleButtonClick("ACTIVE")}
      >
        Active
      </button>
      <button
        className={` rounded-lg h-10 w-40 ${
          activeFilter === "COMPLETED" ? "bg-blue-400" : "bg-blue-100"
        }`}
        onClick={() => handleButtonClick("COMPLETED")}
      >
        Completed
      </button>
    </div>
  );
}

export default Tab;
