import React from "react";

function NewTaskForm({categories, onTaskFormSubmit, formData, setFormData}) {

  const catOptions = categories.map((category) => {
    return <option key={category} value={category === 'All' ? '' : category}>{category === 'All' ? '' : category}</option>
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value})
  }

  return (
    <form className="new-task-form" onSubmit={(e) => onTaskFormSubmit(formData)}>
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
