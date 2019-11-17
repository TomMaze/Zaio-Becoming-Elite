import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

  const id = props.auth.uid

  if (id==="w1d1zAamv0cgYgd8pKD29FfGRj33") {
    return (
      <div>
        <ul className="right">
          <li><NavLink to='/create'>New Task</NavLink></li>
          <li><NavLink to='/signup'>New Group</NavLink></li>
          <li><a onClick={props.signOut}>Sign Out</a></li>
          <li><NavLink to='/dashboard' className="btn btn-floating grey lighten-1">
            {props.profile.initials}
          </NavLink></li>
        </ul>
      </div>
    )   
  }
  else{
    return (
      <div>
        <ul className="right">
          <li><a onClick={props.signOut}>Sign Out</a></li>
          <li><NavLink to='/dashboard' className="btn btn-floating grey lighten-1">
            {props.profile.initials}
          </NavLink></li>
        </ul>
      </div>
    ) 
  }
  
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
