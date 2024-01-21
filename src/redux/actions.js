export const addTodo = (text, generateUniqueId) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: generateUniqueId(),
      text,
      active: 1,
    },
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    payload: filter,
  };
};

export const editTodo = (editedTodo) => {
  return {
    type: "EDIT_TODO",
    payload: editedTodo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: "DELETE_TODO",
    payload: todoId,
  };
};
