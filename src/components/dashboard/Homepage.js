//Class Based: States may be used in the futur
import React, { Component } from 'react'
//2 dots (..) go out and back into siblingfolder
import Leaderboard from './Leaderboard'

class Homepage extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="leftBox leaderboard">
                        <Leaderboard />
                    </div>
                    <div className="rightBox logoBox white">
                        <h5>Sponsored By</h5>
                        <a href="https://www.f-secure.com/en/web/about_global/careers"><img className="sponsor-img" src="/img/f-secure-logo.png" alt=""/></a> 
                    </div>    
                </div>
            </div>
        )

    }
}

export default Homepage
