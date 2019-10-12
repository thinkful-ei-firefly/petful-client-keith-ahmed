import React from 'react'
import ApiService from '../../service/ApiService'
// import {Link} from 'react-router-dom';
import './LandingPage.css'

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
      <div className='LandingPage__body'>
        <header>
          <h1>
            Welcome to Petful
          </h1>

        </header>
        <h3>Adopt your new best friend!</h3>
        <p className='LandingPage__p'>
            Petful is your local neighborhood's dog and cat animal shelter. Adoption is
            on a first come first serve basis, and you must enter the adoption queue before
            you can take your new friend home.
          </p>
        <img className='LandingPage__image'  src = {'https://picfiles.alphacoders.com/277/277517.jpg'} ></img>
        <form className='form' onSubmit={e => this.handleSubmit(e)}>
        <input  name="name" id="name" autoComplete='off' type='text' required></input>
        <label htmlFor="Name" className='label-name'>
            <span className='content-name'>Enter Your Name</span>
        </label> 
        <button className='btn' type="submit">Start looking now </button>
        </form>
        
      </div>
    )
  }
}