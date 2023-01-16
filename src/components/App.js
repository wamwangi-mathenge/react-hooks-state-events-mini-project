import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {


  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")


  function handleAddTask(addTask) {
    setTasks([...tasks, addTask])
  }

  function handleDeleteTask(deleteTask) {
    setTasks([tasks.filter((task) => task.text !== deleteTask)])
  }


  const showTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />

      <div className="tasks">
        <h5>Tasks</h5>
      </div>

      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "ALL")} onFormSubmit={handleAddTask}/>
      <TaskList tasks={showTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
