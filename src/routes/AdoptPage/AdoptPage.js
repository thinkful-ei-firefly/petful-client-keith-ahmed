import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import Cats from '../../components/Cats/Cats';
import Dogs from '../../components/Dogs/Dogs';
import ApiService from '../../service/ApiService';

export default class AdoptPage extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1>Here are the pets for adoption</h1>
        </header>
       
      </div>
    );
  }
}
