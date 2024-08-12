import React from "react";

function Task({text, category, handleDelClick}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelClick}>X</button>
    </div>
  );
}

export default Task;