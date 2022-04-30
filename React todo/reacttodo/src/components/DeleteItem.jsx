import React from "react";

import { useState } from "react";

const DeleteItem = (props) => {
  const [del, setDel] = useState(false);

  const erase = () => {
    setDel(true);
  };

  return (
    <div className="todocss">
      <div>
        <span className="vanish" onClick={erase}>
          <img
            src="https://user-images.githubusercontent.com/91020498/166120083-22d8cf24-c4dd-4429-a942-4e5bf5f69e8f.png"
            alt="deletebutton"
          />
        </span>
      </div>

      <div>
        <li style={{ textDecoration: del ? "line-through" : "" }}>
          {props.text}
        </li>
      </div>
    </div>
  );
};

export default DeleteItem;
