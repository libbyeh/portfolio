import React, { Component } from 'react';
import './styles/main.scss';

class Chimecard extends Component {
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
        <div className='chimeCard-body'>Hi</div>
    )
   }
 }
}
export default Chimecard;