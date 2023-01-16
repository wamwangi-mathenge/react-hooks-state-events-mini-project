import React, { useState } from "react";

function NewTaskForm({ onFormSubmit, categories}) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("code")


  function handleSubmit(event) {
    event.preventDefault()
    onFormSubmit({text, category})
    setText("")
    setCategory("code")
  }


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value="text" onChange={(event) => (event.target.value)} />
      </label>
      <label>
        Category
        <select onChange={(event) => setCategory(event.target.value)} name="category">
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
