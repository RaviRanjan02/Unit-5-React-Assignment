import React from "react";

import { useState } from "react";

const Todo = ({ getData }) => {
  const [text, setText] = useState("");

  const handleChange = (el) => {
    setText(el.target.value);
  };

  return (
    <div className="todomain">
      <div className="todoinput">
        <input
          type="text"
          className="form"
          onChange={handleChange}
          placeholder="Add Todo"
        />
        <button
          className="btntodo"
          type="button"
          onClick={() => {
            getData(text);
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Todo;
