import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks auth={auth} profile={profile} /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper blue darken-4 z-depth-0">
      <div className="nav-div container">
        <Link to='/' className="brand-logo left">Zaio - Becoming Elite</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  //console.log(state)
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
