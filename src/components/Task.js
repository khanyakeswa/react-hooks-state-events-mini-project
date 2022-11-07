import { React, useState } from "react";


function Task( { taskCategory, taskText }) {
  const [ taskVisibility, setVisibility ] = useState(true)

  return (
    taskVisibility ?
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={(e) => {
        setVisibility(!taskVisibility)
      }}>X</button>
    </div>
    :
    <></>
  );
}

export default Task;
