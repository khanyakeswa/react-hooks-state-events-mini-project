import React from 'react'
// import { TASKS } from "../data";
import Task from './Task'

function TaskList({ taskData, filterCategory }) {

  const taskItems = taskData.TASKS.map((task, index) => {
    if (task.category.includes(filterCategory) || filterCategory === "All") {
      return <Task key={index} taskCategory={task.category} taskText={task.text}/>
    }
  })

  return <div className='tasks'>{taskItems}</div>
}

export default TaskList
