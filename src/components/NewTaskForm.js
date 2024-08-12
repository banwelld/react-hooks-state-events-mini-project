import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formData, setFormData] = useState({text: '', category: ''});

  const catOptions = categories.map((category) => {
    return <option key={category} value={category === 'All' ? '' : category}>{category === 'All' ? '' : category}</option>
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({text: '', category: ''});
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleInputChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleInputChange}>
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
