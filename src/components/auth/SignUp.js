import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid!=="w1d1zAamv0cgYgd8pKD29FfGRj33") return <Redirect to='/dashboard' />

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="groupName">Group Name</label>
            <input type="text" id='groupName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Group Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="manager">Manager</label>
            <input type="text" id='manager' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstMember">Team Leader</label>
            <input type="text" id='firstMember' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstMemberPhone">Team Leader Phone Number</label>
            <input type="text" id='firstMemberPhone' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="secondMember">Member 2</label>
            <input type="text" id='secondMember' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="secondMemberPhone">Member 2 Phone Number</label>
            <input type="text" id='secondMemberPhone' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="thirdMember">Member 3</label>
            <input type="text" id='thirdMember' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="thirdMemberPhone">Member 3 Phone Number</label>
            <input type="text" id='thirdMemberPhone' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-4 z-depth-0">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{ authError }</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
