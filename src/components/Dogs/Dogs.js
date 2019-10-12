import React from 'react'
import './Dogs.css'
export default class Dogs extends React.Component {
  render(){
    return (
      <div className='Dogs__body'>
        <h2>Dogs</h2>
        <img className='dog__img' src={this.props.dog.image} alt="dogs"></img>
        <ul className='pets__ul'>
          <li>
            Name: {this.props.dog.name}
          </li>
          <li>
            Gender: {this.props.dog.gender}
          </li>
          <li>
            Age:{this.props.dog.age}
          </li>
          <li>
            Breed: {this.props.dog.breed}
          </li>
          <li>
            Story: {this.props.dog.story}
          </li>
        </ul>
        {(this.props.disabled  || this.props.adoptable.name !== this.props.dog.name) && (
          <p style={{color:'white',backgroundColor:'lightcoral',padding:10,textAlign:'center', margin:'0px 10px',borderRadius:7,}} >This dog is in queue you cannot adopt this pet</p>
        )}


        <button className='adopt__btn'  type="button" disabled={this.props.disabled  || this.props.count !== 0 || this.props.adoptable.name !== this.props.dog.name} onClick={()=>this.props.handleDogAdopt()}>Adopt</button>
      </div>
    )
  }
}

