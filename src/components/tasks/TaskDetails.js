import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import TaskBoard1 from './TaskBoard1'
import TaskBoard2 from './TaskBoard2'

const TaskDetails = (props) => {
  const { task, users, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />

  //<p>{ task.content }</p> add after Due Date if needed
  if(task.title === "Deliverable 1: HTML & CSS"){
    return(
      <div className="container section task-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ task.title }</span>
            <span className="dueDate grey-text">Due Date: { task.dueDate }</span> 
            <TaskBoard1 />
          </div>
        </div>
      </div>
    )  
  }else if(task.title === "Deliverable 2: HTML, CSS & JS"){
    return(
      <div className="container section task-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ task.title }</span>
            <span className="dueDate grey-text">Due Date: { task.dueDate }</span> 
            <TaskBoard2 />
          </div>
        </div>
      </div>
    )  
  }else{
    return (
      <div className="container center">
        <p>Loading task...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tasks = state.firestore.data.tasks;
  const task = tasks ? tasks[id] : null
  return{
    task: task,
    user: state.firestore.ordered.users,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'tasks',
     collection: 'users'
    }
  ])
)(TaskDetails)
