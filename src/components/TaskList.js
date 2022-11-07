import React from 'react'
// import { TASKS } from "../data";
import Task from './Task'

function TaskList({ tasks, filterCategory }) {

  console.log(tasks)
  const taskItems = tasks.map((task) => {
    if (task.category.includes(filterCategory) || filterCategory === "All") {
      return <Task key={task.text} taskCategory={task.category} taskText={task.text}/>
    }
  })

  return <div className='tasks'>{taskItems}</div>
}

export default TaskList
