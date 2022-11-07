import React from 'react'

function CategoryFilter({ categories, filterCategory, setCategory }) {
  const categoryItems = categories.map((category) => {
    let isToggled = false
    const className = category === filterCategory ? 'selected' : ''
    return (
      <button
        key={category}
        className={className}
        onClick={() => {
          if (!isToggled) {
            isToggled = !isToggled
            setCategory(category)
          }
        }}
      >
        {category}
      </button>
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
