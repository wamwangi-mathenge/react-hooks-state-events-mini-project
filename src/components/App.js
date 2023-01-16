import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {


  const [tasks, setTasks] = useState("Tasks")
  const [category, setCategory] = useState("All")


  function handleAddTask(addTask) {
    setTasks([...tasks, addTask])
  }




  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
