const initialState = {
  todos: [],
  visibilityFilter: "ALL_TASKS",
};

const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TODOS":
      return {
        ...state,
        todos: loadTodosFromLocalStorage(),
      };

    case "ADD_TODO":
      const newTodosAdd = [...state.todos, action.payload];
      saveTodosToLocalStorage(newTodosAdd);
      return {
        ...state,
        todos: newTodosAdd,
      };

    case "SET_VISIBILITY_FILTER":
      return {
        ...state,
        visibilityFilter: action.payload,
      };

    case "EDIT_TODO":
      const updatedTodosEdit = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      saveTodosToLocalStorage(updatedTodosEdit);
      return {
        ...state,
        todos: updatedTodosEdit,
      };

    case "DELETE_TODO":
      const updatedTodosDelete = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      saveTodosToLocalStorage(updatedTodosDelete);
      return {
        ...state,
        todos: updatedTodosDelete,
      };

    default:
      return state;
  }
};

export default todoReducer;
