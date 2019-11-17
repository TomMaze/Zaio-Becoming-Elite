import React from 'react'
import { Component } from 'react'

/*
const TaskBoard = (props) =>{
    const {profile} = props;
    return(
        <table class="white">
            <tbody>
                <tr>
                    <th className="center">ID</th>
                    <th>TASK DETAILS</th>
                    <th className="center">SCORE</th>
                    <th className="center">OUT OF</th>
                </tr>
                {this.renderTableData()}
            </tbody>
        </table>
    )
}

const mapStateToProps= (state) =>{
    return{
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(TaskBoard)
*/

class TaskBoard extends Component{
    
    constructor(props){
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            tasks: [    
                {id: 1, taskDetails: 'Similarity to specifications', score: '-', outOf: 25},
                {id: 2, taskDetails: 'Border appears when color is clicked on and text appears next to "COLOR"', score: '-', outOf: 10},
                {id: 3, taskDetails: 'Efficient use of bootstrap - mobile optimization included', score: '-', outOf: 30},
                {id: 4, taskDetails: 'Modal when add to cart button is clicked', score: '-', outOf: 5},
                {id: 5, taskDetails: 'Modal similarity', score: '-', outOf: 15},
                {id: 6, taskDetails: 'Good commenting and style of code', score: '-', outOf: 25},
                {id: 6, taskDetails: 'Good code modularity - single function, singular purpose, reusable', score: '-', outOf: 25},
                {id: 7, taskDetails: 'Link to github code - COMPULSORY', score: '-', outOf: '-'}
            ],

            bonus: [
                {id: 1, taskDetails: 'Allow modal to popup for "Need Help". The modal should contain generic information contained in any help modal', score: '-', outOf: 20},
                {id: 2, taskDetails: 'Use CSS tricks to make the UI fun and attractive to play with', score: '-', outOf: 100}
            ]
        }
    }
    renderDeliverables(){
        return this.state.tasks.map((task,index) => {
            const{ id, taskDetails, score, outOf} = task // destructuring
            return(
                <tr key={id}>
                    <td className="center">{id}</td>
                    <td>{taskDetails}</td>
                    <td className="center">{score}</td>
                    <td className="center">{outOf}</td>
                </tr>
            )
        })
    }
    renderBonus(){
        return this.state.bonus.map((bonus,index) => {
            const{ id, taskDetails, score, outOf} = bonus // destructuring
            return(
                <tr key={id}>
                    <td className="center">{id}</td>
                    <td>{taskDetails}</td>
                    <td className="center">{score}</td>
                    <td className="center">{outOf}</td>
                </tr>
            )
        })
    }

    render(){
        return(
            <table class="white">
                <tbody>
                    <tr>
                        <th className="center">ID</th>
                        <th>Features</th>
                        <th className="center">SCORE</th>
                        <th className="center">OUT OF</th>
                    </tr>
                    {this.renderDeliverables()}
                    <tr>
                        <th className="center">ID</th>
                        <th>Bonus</th>
                        <th className="center">SCORE</th>
                        <th className="center">OUT OF</th>
                    </tr>
                    {this.renderBonus()}
                </tbody>
            </table>
        )
    }
}

export default TaskBoard