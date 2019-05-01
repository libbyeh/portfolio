import React, { Component } from 'react';
import './styles/main.scss';

class Digicard extends Component {
  constructor(props) {
    super();
    this.state = {
    }
  }



  render () {
    if (!this.props.name) {
      return ( <div className='none'></div> );
    } else {
    return (
        <div className='digiCard-body'>Hi</div>
    )
   }
 }
}
export default Digicard;