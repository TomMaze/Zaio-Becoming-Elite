import React from 'react'
import { Component } from 'react'

class Leaderboard extends Component{
    constructor(props){
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            groups: [    
                {id: 1, groupName: 'Autobots', score: '-'},
                {id: 2, groupName: 'B Hertz V', score: '-'},
                {id: 3, groupName: 'Blue Pandas', score: '-'},
                {id: 4, groupName: 'Cicada', score: '-'},
                {id: 5, groupName: 'Firewall', score: '-'},
                {id: 6, groupName: 'Neo Corseta', score: '-'},
                {id: 7, groupName: 'Nexus', score: '-'},
                {id: 8, groupName: 'Recursive Renegades', score: '-'},
                {id: 9, groupName: 'Spiders', score: '-'},
                {id: 10, groupName: 'Super Saiyans', score: '-'},
                {id: 11, groupName: 'Team Rocket', score: '-'},
                {id: 12, groupName: 'Zethu', score: '-'},
                {id: 13, groupName: 'No Name A', score: '-'},
                {id: 14, groupName: 'No Name B', score: '-'}
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