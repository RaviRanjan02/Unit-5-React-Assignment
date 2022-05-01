import {
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    GET_TODO_SUCCESS,
    TOGGLE_TODO_SUCCESS
  } from "../redux/actionType";
  
  const init = {
    todos: [],
    loading: false,
    error: false
  };
  
  export const reducer = (store = init, { type, payload, id }) => {
    switch (type) {
      case ADD_TODO_SUCCESS:
        return { ...store, todos:  [payload], status:false, loading: false};
      case ADD_TODO_LOADING:
        return { ...store, loading: true };
      case ADD_TODO_ERROR:
        return { ...store, loading: false, error: true };
  
      case GET_TODO_SUCCESS:
        return {
            ...store,
          todos: payload,
          loading: false
        };
  
      case TOGGLE_TODO_SUCCESS:
          return store.todos.map((todo) => todo.id === id ? (todo.status == !todo.status) : todo)
      default:
        return { ...store };
    }
  };