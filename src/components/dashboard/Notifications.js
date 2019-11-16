//Function Based: States aren't used
import React from 'react'
import { connect } from 'react-redux'

const Notifications = (props) => {
    return(
        <div>
            <div className="logoBox white">
                <h5>Sponsored By</h5>
                <a href="https://www.f-secure.com/en/web/about_global/careers"><img className="sponsor-img" src="/img/f-secure-logo.png" alt=""/></a> 
            </div>    
            <br/>
            <div className="GroupDetailsBox white">
                <h5 align="center">Team {props.profile.groupName}</h5>
                <p align="center">{props.profile.firstMember}</p>
                <p align="center">{props.profile.secondMember}</p>
                <p align="center">{props.profile.thirdMember}</p>
            </div> 
        </div> 
    )
}

const mapStateToProps = (state) => {
  return{
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Notifications)