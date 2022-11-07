import React from 'react'

function NewTaskForm({
  categories,
  tasks,
  setDetailsInput,
  setCategoryInput,
  onTaskFormSubmit,
  detailsInput,
  categoryInput
}) {
  const categoryOptions = categories.map((category) => {
    if (category !== 'All') {
      return (
        <option value={category} key={category}>
          {category}
        </option>
      )
    }
  })
  return (
    <form onSubmit={onTaskFormSubmit} className='new-task-form'>
      <label>
        Details
        <input
          type='text'
          name='text'
          onChange={(e) => {
            setDetailsInput(e.target.value)
          }}
          value={detailsInput}
        />
      </label>
      <label>
        Category
        <select
          name='category'
          onChange={(e) => {
            setCategoryInput(e.target.value)
          }}
          value={categoryInput}
        >
          {categoryOptions}
        </select>
      </label>
      <input type='submit' value='Add task' />
    </form>
  )
}

export default NewTaskForm
