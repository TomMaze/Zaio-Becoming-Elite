import React from 'react'
import { Component } from 'react'

class TaskBoard extends Component{
    
    constructor(props){
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            tasks: [    
                {id: 1, taskDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laboriosam maiores.', score: 4, outOf: 5},
                {id: 2, taskDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laboriosam maiores.', score: 2, outOf: 4},
                {id: 3, taskDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laboriosam maiores.', score: 3, outOf: 6}
            ]
        }
    }
    renderTableData(){
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

    render(){
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
}

const mapStateToProps= (state) =>{
    return{
        profile: state.firebase.profile
    }
}
export default TaskBoard