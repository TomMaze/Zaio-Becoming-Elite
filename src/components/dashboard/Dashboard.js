import React, { Component } from 'react'
import TaskList from '../tasks/TaskList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    
    const { tasks, auth } = this.props;
    //console.log(tasks)
    if (!auth.uid) return <Redirect to='/signin' />
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="content">
            <TaskList tasks={tasks} />
          </div>
          <div className="side">
            <div className="ad white">
                  <h5 className="center">Sponsored By</h5>
                  <a href="https://www.f-secure.com/en/web/about_global/careers"><img className="sponsor-img" src="/img/f-secure-logo.png" alt=""/></a> 
            </div>   
            <div className="groupDetails">
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    tasks: state.firestore.ordered.tasks,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tasks', orderBy: ['dueDate', 'asc']}
  ])
)(Dashboard)
