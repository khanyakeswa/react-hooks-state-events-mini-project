import React from 'react'
import { useState } from 'react'
import CategoryFilter from './CategoryFilter'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'
import Task from './Task'

import { CATEGORIES, TASKS } from '../data'
console.log("Here's the data you're working with")
console.log({ CATEGORIES, TASKS })

// const taskData = { CATEGORIES, TASKS }

function App() {
  const [currentTasks, setTasks] = useState(TASKS)
  const [filterCategory, setCategory] = useState('All')
  const [detailsInput, setDetailsInput] = useState('')
  const [categoryInput, setCategoryInput] = useState('Code')

  const onTaskFormSubmit = (e) => {
    e.preventDefault()
    console.log(categoryInput)
    const newItem = {
      text: detailsInput,
      category: categoryInput,
    }
    setTasks([...currentTasks, newItem])
    setDetailsInput('')
    setCategoryInput('Code')
  }

  return (
    <div className='App'>
      <h2>My tasks</h2>
      <CategoryFilter
        tasks={currentTasks}
        categories={CATEGORIES}
        filterCategory={filterCategory}
        setCategory={setCategory}
      />
      <NewTaskForm
        tasks={currentTasks}
        categories={CATEGORIES}
        setDetailsInput={setDetailsInput}
        setCategoryInput={setCategoryInput}
        onTaskFormSubmit={onTaskFormSubmit}
        detailsInput={detailsInput}
        categoryInput={categoryInput}
      />
      <TaskList
        filterCategory={filterCategory}
        tasks={currentTasks}
        categories={CATEGORIES}
        details={detailsInput}
        categoryInput={categoryInput}
      />
    </div>
  )
}

export default App
