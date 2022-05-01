import {
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    GET_TODO_SUCCESS,
    TOGGLE_TODO_SUCCESS
  } from "./actionType";
  
  export const addTodoSuccess = (data) => ({
    type: ADD_TODO_SUCCESS,
    payload: data
  });
  
  export const addTodoError = (err) => ({
    type: ADD_TODO_ERROR,
    payload: err
  });
  
  export const addTodoLoading = () => {
    return {
      type: ADD_TODO_LOADING
    };
  };
  
  export const getTodoSuccess = (data) => {
    return {
      type: GET_TODO_SUCCESS,
      payload: data
    };
  };
  
  export const toggleTodoSuccess = ( id) => {
    return {
      type: TOGGLE_TODO_SUCCESS,
      id
    };
  };