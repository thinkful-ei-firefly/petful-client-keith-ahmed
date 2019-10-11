import React from 'react'
import ApiService from '../../service/ApiService'
// import {Link} from 'react-router-dom';

export default class LandingPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    let user = ''
    if (e.target['name'].value !== ''){
      user = e.target['name'].value
    }
    window.localStorage.setItem("name", user)
    ApiService.handleUserPost(user)
    .then(user => {
      console.log(user)
      this.props.history.push(`/adopt`)
    })
    .catch(error => {
      console.error(error)
    })
  }

  render(){
    return(
      <div>
        <header>
          <h1>
            Welcome to Petful
          </h1>
        </header>
        <p>
          To start the adoption , click the start button . <br></br>
          You'll see cat and dog that are available for adoption.<br></br>
          If you are first in line, you will the option to adopt either pet. <br></br>
          You'll get their story.<br></br>
          
        </p>
        
        <form onSubmit={e => this.handleSubmit(e)}><label htmlFor="Name">Name:</label> 
        <input placeholder="e.g. John " name="name" id="name"></input>
        <button type="submit">Start</button>
        </form>
        
      </div>
    )
  }
}