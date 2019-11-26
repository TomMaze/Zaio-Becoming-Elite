import React from 'react'
import { Component } from 'react'
import axios from 'axios'

//import { connect } from 'react-redux'
//import { firestoreConnect } from 'react-redux-firebase'
//import { compose } from 'redux'

class TaskBoard1 extends Component{
    state = {
        scores: [],

        tasks: [    
            {id: 0, taskDetails: 'Similarity to specifications', outOf: 25},
            {id: 1, taskDetails: 'Border appears when color is clicked on and text appears next to "COLOR"', outOf: 10},
            {id: 2, taskDetails: 'Efficient use of bootstrap - mobile optimization included', outOf: 30},
            {id: 3, taskDetails: 'Modal when add to cart button is clicked', outOf: 5},
            {id: 4, taskDetails: 'Modal similarity', outOf: 15},
            {id: 5, taskDetails: 'Good commenting and style of code', outOf: 25},
            {id: 6, taskDetails: 'Good code modularity - single function, singular purpose, reusable', outOf: 25},
            {id: 7, taskDetails: 'Link to github code - COMPULSORY', outOf: '-'}
        ],

        bonus: [
            {id: 0, taskDetails: 'Allow modal to popup for "Need Help". The modal should contain generic information contained in any help modal', outOf: 20},
            {id: 1, taskDetails: 'Use CSS tricks to make the UI fun and attractive to play with', outOf: 100}
        ],
        details: []

    }

//<Link to={'/task/' + task.id} key={task.id}>
       
    componentDidMount(){
        axios.get('https://zaiobootcamp.herokuapp.com/api/getmarks/Spiders')
            .then(res => {
                this.setState({
                    scores: res.data.map(score => score.Week1G)
                })
            })
    }

    render(){
        const { scores, tasks } = this.state;
        console.log(this.state)
        const taskList = tasks.length ? (
            tasks.map((task, index) => {
                return(
                    <tr key={index}>
                        <td className="center">{task.id + 1}</td>
                        <td>{task.taskDetails}</td>
                        <td className="center">{task.outOf}</td>
                    </tr>
                )
            })
        ) : (
            <div className="center">Taskboard Unavailable...</div>
        )

        /*
        const scoreList = tasks.length ? (
            scores.map((score, index) => {
                return(
                    <tr key={index}>
                        <td className="center">{score.Week1G}</td>
                    </tr>
                )
            })
        ) : (
            <div className="center">Taskboard Unavailable...</div>
        )
        */
        return(
            <div className="container white">
                <table className='white'>
                    <tbody>
                        <tr>
                            <th className="center">ID</th>
                            <th>Features</th>
                            <th className="center">OUT OF</th>
                            <th className="center">SCORE</th>
                        </tr>
                        {taskList}
                        {scoreList}
                    </tbody>
                </table>
            </div>
        )
        
    }
}

  
export default TaskBoard1




/*
const mapStateToProps = (state) => {
    console.log(state)
    return {
      users: state.firestore.ordered.users,
      auth: state.firebase.auth
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'users'}
    ])
  )(TaskBoard1)








class TaskBoard1 extends Component{
    
    constructor(props){
        console.log(props);
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            tasks: [    
                {id: 0, taskDetails: 'Similarity to specifications', score: '-', outOf: 25},
                {id: 1, taskDetails: 'Border appears when color is clicked on and text appears next to "COLOR"', score: '-', outOf: 10},
                {id: 2, taskDetails: 'Efficient use of bootstrap - mobile optimization included', score: '-', outOf: 30},
                {id: 3, taskDetails: 'Modal when add to cart button is clicked', score: '-', outOf: 5},
                {id: 4, taskDetails: 'Modal similarity', score: '-', outOf: 15},
                {id: 5, taskDetails: 'Good commenting and style of code', score: '-', outOf: 25},
                {id: 6, taskDetails: 'Good code modularity - single function, singular purpose, reusable', score: '-', outOf: 25},
                {id: 7, taskDetails: 'Link to github code - COMPULSORY', score: '-', outOf: '-'}
            ],

            bonus: [
                {id: 0, taskDetails: 'Allow modal to popup for "Need Help". The modal should contain generic information contained in any help modal', score: '-', outOf: 20},
                {id: 1, taskDetails: 'Use CSS tricks to make the UI fun and attractive to play with', score: '-', outOf: 100}
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

export default TaskBoard1
*/