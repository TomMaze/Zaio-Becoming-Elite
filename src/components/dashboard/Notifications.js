//Function Based: States aren't used
import React from 'react'
import { connect } from 'react-redux'

const Notifications = (props) => {
    return(
        <div className="GroupDetailsBox white">
            <h5 align="center">Team {props.profile.groupName}</h5>
            <p align="center">{props.profile.firstMember}</p>
            <p align="center">{props.profile.secondMember}</p>
            <p align="center">{props.profile.thirdMember}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
  return{
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Notifications)