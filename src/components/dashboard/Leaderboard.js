import React from 'react'
import { Component } from 'react'
import axios from 'axios'

class Leaderboard extends Component{
    state = {
        groups: []
    }
    
    componentDidMount(){
        axios.get('https://zaiobootcamp.herokuapp.com/api/getleaderboard')
            .then(res => {
                //console.log(res)
                this.setState({
                    groups: res.data.slice(0,10)
                })
            })
    }
    render(){
        const { groups } = this.state;
        const groupList = groups.length ? (
            groups.map(group => {
                return(
                    <tr key={group.Name}>
                        <td>{group.index}</td>
                        <td>{group.Name}</td>
                        <td>{group.Total}</td>
                    </tr>
                )
            })
        ) : (
            <div className="center">Leaderboard Unavailable...</div>
        )
        return(
            <div className="container white">
                <td>
                    <table className='centered white'>
                        <tbody>
                            <tr>
                                <th className="center">ID</th>
                                <th className="center">GROUP NAME</th>
                                <th className="center">SCORE</th>
                            </tr>
                            {groupList}
                        </tbody>
                    </table>
                </td>
            </div>
        )
    }
}

export default Leaderboard