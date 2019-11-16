import React from 'react'
import { Component } from 'react'

class Leaderboard extends Component{
    constructor(props){
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            groups: [    
                {id: 1, groupName: 'Zaio', score: 99},
                {id: 2, groupName: 'Facebook', score: 90},
                {id: 3, groupName: 'Twitter', score: 88}
            ]
        }
    }

    renderTableData(){
        return this.state.groups.map((group,index) => {
            const{ id, groupName, score} = group // destructuring
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{groupName}</td>
                    <td>{score}</td>
                </tr>
            )
        })
    }

    render(){
        return(
            <div className= "container">
                <table class='centered white'>
                    <tbody>
                        <tr>
                            <th className="center">ID</th>
                            <th className="center">GROUP NAME</th>
                            <th className="center">SCORE</th>
                        </tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Leaderboard