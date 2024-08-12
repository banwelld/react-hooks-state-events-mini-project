import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleCatClick = (e) => {
    const filteredTaskObj = tasks.filter((task) => task.category === e.target.name || e.target.name === 'All')
    setFilteredTasks(filteredTaskObj);
    updateClassNames(e);
  }

  const updateClassNames = (e) => {
    const selectedElement = e.target.parentElement.querySelector('.selected')
    if (selectedElement) selectedElement.className = '';
    e.target.className = 'selected';
  }

  const handleDelClick = (e) => {
    const updatedTasks = tasks.filter((task) => task.text !== e.target.parentElement.id);
    setTasks(updatedTasks);
    const updatedFilteredTasks = filteredTasks.filter((task) => task.text !== e.target.parentElement.id);
    setFilteredTasks(updatedFilteredTasks);
  }

  const onTaskFormSubmit = (formData) => {
    if (formData.category) {
      console.log(formData.category);
      setTasks([formData,...tasks]);
      const selectedElement = document.querySelector('button.selected');
      if (! selectedElement || (selectedElement && (selectedElement.innerText === formData.category || selectedElement.innerText === 'All'))) setFilteredTasks([formData,...filteredTasks]);
    } else {
      alert('Please select a category');
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCatClick={handleCatClick} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} handleDelClick = {handleDelClick} />
    </div>
  );
}

export default App;
