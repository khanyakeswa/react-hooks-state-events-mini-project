import React from 'react'
import { useState } from 'react'
import CategoryFilter from './CategoryFilter'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'
import Task from './Task'

import { CATEGORIES, TASKS } from '../data'
console.log("Here's the data you're working with")
console.log({ CATEGORIES, TASKS })

const taskData = { CATEGORIES, TASKS }

function App() {
  const [filterCategory, setCategory] = useState('All')
  const [detailsInput, setDetailsInput] = useState('')
  const [categoryInput, setCategoryInput] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(categoryInput)
    return <Task taskCategory={categoryInput} taskText={detailsInput}></Task>
  }

  return (
    <div className='App'>
      <h2>My tasks</h2>
      <CategoryFilter
        taskData={taskData}
        filterCategory={filterCategory}
        setCategory={setCategory}
      />
      <NewTaskForm
        taskData={taskData}
        setDetailsInput={setDetailsInput}
        setCategoryInput={setCategoryInput}
        submitHandler={submitHandler}
      />
      <TaskList
        filterCategory={filterCategory}
        taskData={taskData}
        details={detailsInput}
        categoryInput={categoryInput}
      />
    </div>
  )
}

export default App
