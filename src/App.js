import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage/LandingPage'
import AdoptPage from './routes/AdoptPage/AdoptPage'


import './App.css';

export default class App extends React.Component {
  
mainRoutes (){
  return (
    <>
      <Route 
      exact
      key ='/'
      path='/'
      component = {LandingPage}
    />


    <Route 
      exact
      key ='/adopt'
      path ='/adopt'
      component = {AdoptPage}
    />
    </>
  )
}
 
render(){
  return (
    <div className="App">
      <main className = 'App_main'>
        {this.mainRoutes()}
      </main>
    </div>
  );
  }

}