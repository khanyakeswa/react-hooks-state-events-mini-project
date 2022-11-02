import React from "react";
import { useState } from "react"
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

const taskData ={ CATEGORIES, TASKS }

function App() {
  const [ filterCategory, setCategory ] = useState('All')

    // console.log(filterCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filterCategory={filterCategory} setCategory={setCategory} taskData={ taskData }/>
      <NewTaskForm />
      <TaskList filterCategory={filterCategory} taskData={ taskData }/>
    </div>
  );
}

export default App;
