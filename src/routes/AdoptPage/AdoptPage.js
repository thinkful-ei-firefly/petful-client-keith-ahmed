import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import Cats from '../../components/Cats/Cats';
import Dogs from '../../components/Dogs/Dogs';
import Users from '../../components/Users/Users';
import ApiService from '../../service/ApiService';
import './AdoptPage.css'

export default class AdoptPage extends React.Component {
  state = {
    dogs: null,
    cats: null,
    users: null,
    dogNode: null,
    catNode: null,
    name: null,
    count: null,
    disabled: false
  };

  findPosition = () => {
    let count = 0;
    const name = window.localStorage.getItem('name');
    let currNode = this.state.users.first;
    if(currNode){
    while (currNode.data !== name && currNode.next !== null ) {
      count++;
      currNode = currNode.next;
    }

    if (currNode.data !== name) {
      count++;
      console.log('name not in list');
    }
    this.setState({ count });
  }else {this.setState({count,  disabled: true });}
    
  };

  handleDogAdopt = () => {
    ApiService.handleDogAdopt()
      .then(dogs => {
        this.setState({ dogs, dogNode: dogs.first });
      })
      .then(res =>
        ApiService.handleUserDelete().then(users => {
          this.setState({ users });
          this.props.history.push('/');
        })
      )
      .catch(error => console.error(error));
  };

  handleCatAdopt = () => {
    ApiService.handleCatAdopt()
      .then(cats => {
        this.setState({ cats, catNode: cats.first });
      })
      .then(res =>
        ApiService.handleUserDelete().then(users => {
          this.setState({ users });
          this.props.history.push('/');
        })
      )
      .catch(error => console.error(error));
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/dogs`),
      fetch(`${config.API_ENDPOINT}/cats`),
      fetch(`${config.API_ENDPOINT}/adopters`)
    ])
      .then(([dogsRes, catsRes, usersRes]) => {
        if (!dogsRes.ok) return dogsRes.json().then(e => Promise.reject(e));
        if (!catsRes.ok) return catsRes.json().then(e => Promise.reject(e));
        if (!usersRes.ok) return usersRes.json().then(e => Promise.reject(e));

        return Promise.all([dogsRes.json(), catsRes.json(), usersRes.json()]);
      })
      .then(([dogs, cats, users]) => {
        this.setState({
          dogs,
          cats,
          users,
          dogNode: dogs.first,
          catNode: cats.first
        });
      })
      .then(res => this.findPosition())
      .catch(error => {
        console.error({ error });
      });
  }

  handleSeeMore = () => {
    if (this.state.catNode.next && this.state.dogNode.next) {
      this.setState({
        catNode: this.state.catNode.next,
        dogNode: this.state.dogNode.next
      });
    }
  };

  render() {
    return (
      <div className='AdoptPage' >
        <header>
          <h1>Here are the pets for adoption</h1>
          {this.state.count < 1 && (
            <p style={{color:'black',backgroundColor:'lightGreen',padding:10}}>There is no one in front of you <br></br> 
            You can Adopt any pet from below</p>
          )}
          {this.state.count >= 1 && (
            <p style={{color:'white',backgroundColor:'lightcoral',padding:10,textAlign:'center', marginBottom:0}} >There are {this.state.count} of users in front of you</p>
          )}
        </header>
        
        <section className='AdoptPage__section'>
        
   
        
        {this.state.catNode !== null && (
          <Cats
            count={this.state.count}
            handleCatAdopt={this.handleCatAdopt}
            adoptable={this.state.cats.first.data}
            disabled={this.state.disabled}
            cat={this.state.catNode.data}
          />
        )}

        {this.state.count >= 1 && <Users users={this.state.users} />}

        
        {this.state.dogNode !== null && (
          <Dogs
            count={this.state.count}
            handleDogAdopt={this.handleDogAdopt}
            adoptable={this.state.dogs.first.data}
            disabled={this.state.disabled}
            dog={this.state.dogNode.data}
          />
        )}
        
        </section>
        <button className='morePets__btn' onClick={() => this.handleSeeMore()}>See More pets</button>

      </div>
    );
  }
}
