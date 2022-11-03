import React from 'react'

function NewTaskForm({
  taskData,
  setDetailsInput,
  setCategoryInput,
  submitHandler,
}) {
  const categoryOptions = taskData.CATEGORIES.map((category) => {
    if (category !== 'All') {
      return (
        <option value={category} key={category}>
          {category}
        </option>
      )
    }
  })
  return (
    <form onSubmit={submitHandler} className='new-task-form'>
      <label>
        Details
        <input
          type='text'
          name='text'
          onChange={(e) => {
            setDetailsInput(e.target.value)
          }}
        />
      </label>
      <label>
        Category
        <select
          name='category'
          onChange={(e) => {
            setCategoryInput(e.target.value)
          }}
        >
          {categoryOptions}
        </select>
      </label>
      <input type='submit' value='Add task' />
    </form>
  )
}

export default NewTaskForm
