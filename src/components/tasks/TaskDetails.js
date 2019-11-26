import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//import { getFirestore } from 'redux-firestore';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import TaskBoard1 from './TaskBoard1'
import TaskBoard2 from './TaskBoard2'

const TaskDetails = (props) => {

  const { tasks, users, auth } = props;
  //console.log(tasks);
  if (!auth.uid) return <Redirect to='/signin' />
  
  //<p>{ task.content }</p> add after Due Date if needed
  if(tasks.title === "Deliverable 1: HTML & CSS"){
    return(
      <div className="container section task-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ tasks.title }</span>
            <span className="dueDate grey-text">Due Date: { tasks.dueDate }</span> 
            <TaskBoard1 users={ users } />
          </div>
        </div>
      </div>
    )  
  }else if(tasks.title === "Deliverable 2: HTML, CSS & JS"){
    return(
      <div className="container section task-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ tasks.title }</span>
            <span className="dueDate grey-text">Due Date: { tasks.dueDate }</span> 
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
    tasks: task,
    users: state.firestore.ordered.users,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'tasks',
    },
    {collection: 'users'
    }
  ])
)(TaskDetails)


/*
firestore.collection('users').doc('w1d1zAamv0cgYgd8pKD29FfGRj33').get()
  .then(snapshot => {
    console.log(snapshot)
    snapshot.forEach(doc => {
      const data = doc.data();
      console.log(doc.id, data);
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
  */