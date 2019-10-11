import React from 'react'
import ApiService from '../../service/ApiService';
export default class Cats extends React.Component {
  render() {
    return(
      <div>
        <h2>Cats</h2>
        <img src={this.props.cat.image} alt="cats"></img>
        <ul>
          <li>
            Name: {this.props.cat.name}
          </li>
          <li>
            Gender: {this.props.cat.gender}
          </li>
          <li>
            Age:{this.props.cat.age}
          </li>
          <li>
            Breed: {this.props.cat.breed}
          </li>
          <li>
            Story: {this.props.cat.story}
          </li>
        </ul>
        <button type="button" disabled={this.props.disabled || this.props.count !== 0 || this.props.adoptable.name !== this.props.cat.name} onClick={()=>this.props.handleCatAdopt()}>Adopt</button>
      </div>
    )
  }

}