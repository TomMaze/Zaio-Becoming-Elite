import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../store/actions/taskActions'
import { Redirect } from 'react-router-dom'


class CreateTask extends Component {
  state = {
    title: '',
    content: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTask(this.state)
    this.props.history.push('/dashboard')
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Task</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Task Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Task Content</label>
          </div>
          <div className="input-field">
            <input type="date" id='dueDate' className="datePicker grey-text" onChange={this.handleChange} />
            <label htmlFor="dueDate">Due Date</label>
          </div>
          <div className="input-field">
            <button className="btn blue darken-4">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createTask: (task) => dispatch(createTask(task))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(CreateTask)
