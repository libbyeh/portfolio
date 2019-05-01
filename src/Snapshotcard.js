import React, { Component } from 'react';
import './styles/main.scss';

class Snapshotcard extends Component {
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
        <div className='snapshotCard-body'>Hi</div>
    )
   }
 }
}
export default Snapshotcard;