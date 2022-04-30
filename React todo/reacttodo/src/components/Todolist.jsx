import React, { useState } from "react";

import Todo from "./Todo";

import DeleteItem from "./DeleteItem";

const Todolist = () => {
  const [todo, setTodo] = useState([]);

  const getData = (text) => {
    setTodo([...todo, text]);
  };

  return (
    <div>
      <Todo getData={getData} />
      <div className="maincon">
        {todo.map((el, index) => (
          <div className="input">
            <DeleteItem key={index} text={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
