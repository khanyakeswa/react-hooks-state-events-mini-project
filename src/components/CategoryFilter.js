import React from 'react'
import { useState } from 'react'

function CategoryFilter({ taskData, setCategory }) {

  const categoryItems = taskData.CATEGORIES.map((category) => {
    let isToggled = false
    return (
      <button
        key={category}
        onClick={((e) => {
          if (!isToggled) {
            isToggled = !isToggled
            setCategory(category)
            e.target.className = (!isToggled ? '' : 'selected')
          }
        })}
      >{category}</button>
    )
  })
  return (
    <div className='categories'>
      <h5>Category filters</h5>
      {categoryItems}
    </div>
  )
}

export default CategoryFilter
