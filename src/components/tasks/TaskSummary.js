import React from 'react'

const TaskSummary = ({task}) => {
  return (
    <div className="card z-depth-0 task-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{task.title}</span>
        <p className= "grey-text">Due Date: {task.dueDate}</p>
      </div>
    </div>
  )
}

export default TaskSummary
