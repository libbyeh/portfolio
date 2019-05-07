import React, { Component } from 'react';
import './styles/main.scss';

class Walgreenscard extends Component {
  constructor(props) {
    super();
  }

  render () {
    if (!this.props.name) {
      return ( <div className='none'></div> );
    } else {
    return (
      <div className='popup'>
        <div className='walgreensCard-body'>Walgreen's Landing Page</div>
        <button className='pop-btn' onClick={this.props.closeProject}>X</button>
      </div>
    )
   }
 }
}
export default Walgreenscard;