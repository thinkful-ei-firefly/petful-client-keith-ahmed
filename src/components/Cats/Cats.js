import React from 'react'
// import ApiService from '../../service/ApiService';
import './Cats.css'
export default class Cats extends React.Component {
  render() {
    return(
      <div className='Cats__body'>
        <h2>Cats</h2>
        <img className='cat__img' src={this.props.cat.image} alt="cats"></img>
        <ul className='pets__ul'>
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
        {(this.props.disabled  || this.props.adoptable.name !== this.props.cat.name) && (
          <p style={{color:'white',backgroundColor:'lightcoral',padding:10,textAlign:'center',  margin:'0px 10px',borderRadius:7,}} >This cat is in queue you cannot adopt this pet</p>
        )}
        {/**this pet is in queue you cannot adopt this pet */}
        <button className='adopt__btn' type="button" disabled={this.props.disabled || this.props.count !== 0 || this.props.adoptable.name !== this.props.cat.name} onClick={()=>this.props.handleCatAdopt()}>Adopt</button>
      </div>
    )
  }

}