import React from 'react'
import './Users.css'

export default class Users extends React.Component {
  displayUsers(){
    let currNode = this.props.users.first
    let i = 0
    let usersArr = []
    while(currNode!== null){
      usersArr.push(<p key={i}>{currNode.data}</p>)
      i++
      currNode = currNode.next
    }
    return usersArr

  }
  render(){
    return(
      <div className='Users'>
        <h2>Users Queue</h2>
        {this.displayUsers()}
      </div>
    )
  }
}