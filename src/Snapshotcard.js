import React, { Component } from 'react';
import './styles/main.scss';

class Snapshotcard extends Component {
  constructor(props) {
    super();
  }

  render () {
    if (!this.props.name) {
      return ( <div className='none'></div> );
    } else {
    return (
      <div className='popup'>
        <div className='snapshotCard-body'>Snap-shot</div>
        <button className='pop-btn' onClick={this.props.closeProject}>X</button>
      </div>
    )
   }
 }
}
export default Snapshotcard;