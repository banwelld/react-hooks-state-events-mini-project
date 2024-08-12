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
  const [formData, setFormData] = useState({text: '', category: ''});

  const handleCatClick = (e) => {
    updateClassNames(e);
    const filterCat = e.target.innerText;
    console.log(filterCat)
    const filteredTaskObj = tasks.filter((task) => task.category === filterCat || filterCat === 'All')
    setFilteredTasks(filteredTaskObj);
  }

  const handleDelClick = (e) => {
    const delItemName = e.target.parentElement.querySelector('.text').innerText;
    const updatedTasks = tasks.filter((task) => task.text !== delItemName);
    const updatedFilteredTasks = filteredTasks.filter((task) => task.text !== delItemName);
    setTasks(updatedTasks);
    setFilteredTasks(updatedFilteredTasks);
  }

  const updateClassNames = (e) => {
    const selectedElement = e.target.parentElement.querySelector('.selected')
    if (selectedElement) selectedElement.className = '';
    e.target.className = 'selected';
  }

  const onTaskFormSubmit = (data) => {
    if (data.category) {
      console.log(data.category);
      setTasks([data,...tasks]);
      const selectedElement = document.querySelector('button.selected');
      if (! selectedElement || (selectedElement && (selectedElement.innerText === data.category || selectedElement.innerText === 'All'))) setFilteredTasks([data,...filteredTasks]);
      setFormData({text: '', category: ''});
    } else {
      alert('Please select a category');
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCatClick={handleCatClick} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} formData={formData} setFormData={setFormData} />
      <TaskList filteredTasks={filteredTasks} handleDelClick={handleDelClick} />
    </div>
  );
}

export default App;
