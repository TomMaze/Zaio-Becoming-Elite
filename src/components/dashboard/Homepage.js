//Class Based: States may be used in the futur
import React, { Component } from 'react'
//2 dots (..) go out and back into siblingfolder
import Leaderboard from './Leaderboard'

class Homepage extends Component{
    render(){
        return(
            <div className="homepage container">
                <div className="row">
                    <div className="content">
                        <Leaderboard />
                    </div>
                    <div className="side">
                        <div className="ad white">
                            <h5 className="center">Sponsored By</h5>
                            <a href="https://www.f-secure.com/en/web/about_global/careers"><img className="sponsor-img" src="/img/f-secure-logo.png" alt=""/></a> 
                        </div>    
                    </div>
                </div>
            </div>
        )

    }
}

export default Homepage
