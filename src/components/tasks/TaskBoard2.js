import React from 'react'
import { Component } from 'react'

class TaskBoard2 extends Component{
    
    constructor(props){
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            tasks: [    
                {id: 1, taskDetails: 'Increment button and decrement functioning correctly (decrement does not go below 0)', score: '-', outOf: 15},
                {id: 2, taskDetails: 'The custom fit number corresponds to incremented number in modal', score: '-', outOf: 10},
                {id: 3, taskDetails: 'Loop used to display selected color n times (n = selected number of modal)', score: '-', outOf: 15},
                {id: 4, taskDetails: 'Add to cart redirects to checkout', score: '-', outOf: 10},
                {id: 5, taskDetails: 'Link to hosted code (deploy on 000webhost or any other service)', score: '-', outOf: 40},
                {id: 6, taskDetails: 'Good commenting and style of code', score: '-', outOf: 25},
                {id: 7, taskDetails: 'Good code modularity - single function, singular purpose, reusable', score: '-', outOf: 25},
                {id: 8, taskDetails: 'Link to github code - COMPULSORY', score: '-', outOf: '-'}
            ],

            bonus: [
                {id: 1, taskDetails: 'Implement object oriented programming - classes and objects to render colors', score: '-', outOf: 50},
                {id: 2, taskDetails: 'Allocate price with each color and allow selection of multiple prices with different colors and ensure the $14.99 is changed to the total cost', score: '-', outOf: 50},
                {id: 2, taskDetails: 'Create checkout modal giving a summary of items added to cart and have a checkout button that matches the same aesthetic that closes the modal and refreshes the page', score: '-', outOf: 20}
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
            <table className="white">
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

export default TaskBoard2