import axios from "axios";
import "./Todos.css"
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodoError, addTodoSuccess, getTodoSuccess, getToggleTodo, toggleTodoSuccess } from "../redux/actions";

import { Link } from "react-router-dom";
import { ADD_TODO_ERROR } from "../redux/actionType";

export const Todos = () => {
  const {todos, loading, error}  = useSelector((store) => ({
    todos: store.todos,
    loading: store.loading,
    error: store.error,
  }));

  

  const dispatch = useDispatch();

  useEffect(() => {
      getTodos();
  }, []);

  const getTodos = async() => {
   
    let res = await axios.get("http://localhost:8080/todos");


    dispatch(getTodoSuccess(res.data))

  }


  const handleToggle = async (id) => {
    var data;
    todos.map((todo) => (todo.id === id ? (data = todo) : todo));
    
   let res =  await axios.patch(`http://localhost:8080/todos/${id}`,{
      status: true,
    })

    getTodos();
  }

  const handleDelete = async (id) =>{
     
       await axios.delete(`http://localhost:8080/todos/${id}`)
       getTodos();
  }

  console.log(todos);

  return loading ? (
      <h1>Loading...</h1>
  ) : error ? (
      <h1>something went wrong</h1>
  ) : (

   <div>
      <Link to="/" >
          <button className="btn">Go To HomePage</button>
      </Link>
      {
          todos.map((el )=>{
              return (
                <div className={el.status ? "green" : "red"} key={el.id}>
                  <h1 className="dbmain">
                    Title: {el.title} & authName: {el.authorName}
                  </h1>
                  <button className="btn" onClick={()=>{
                      handleDelete(el.id)
                  }}>Remove</button> <button className="btn" onClick={()=>{
                      handleToggle(el.id)
                  }}>Toggle</button> <button className="btn">Edit</button>
                </div>
              );
          })
      }
  </div>
  )
};