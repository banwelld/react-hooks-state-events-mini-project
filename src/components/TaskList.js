import React from "react";
import Task from "./Task";

function TaskList({filteredTasks, handleDelClick}) {

  const taskList = filteredTasks.map(taskObj => {
    return <Task key={taskObj.text} text={taskObj.text} category={taskObj.category} handleDelClick={handleDelClick} />
  });

  return <div className="tasks">{taskList}</div>
}

export default TaskList;