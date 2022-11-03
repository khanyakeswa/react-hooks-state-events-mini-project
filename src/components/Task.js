import React from "react";

function Task( { taskCategory, taskText }) {
  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={(e) => {
        console.log(e.target)
      }}>X</button>
    </div>
  );
}

export default Task;
