import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage/LandingPage'

import './App.css';

export default class App extends React.Component {
  
mainRoutes (){
  return (
    <>
      <Route 
      exact
      key ='/'
      component = {LandingPage}
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