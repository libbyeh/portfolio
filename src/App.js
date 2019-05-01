import React, { Component } from 'react';
import './styles/main.scss';
import { projects } from './Data';
import Chimecard from './Chimecard.js';
import Digicard from './Digicard.js';
import Walgreenscard from './Walgreenscard.js';
import Snapshotcard from './Snapshotcard.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      chimeCard: '',
      digiCard: '',
      walgreensCard: '',
      snapshotCard: ''
    }
  }

  renderChime = (e) => {
    let name = e.target.innerText;
    this.setState({
      chimeCard: name
    })
  }

  renderDigi = (e) => {
    let name = e.target.innerText;
    this.setState({
      digiCard: name
    })
  }

  renderWalgreens = (e) => {
    let name = e.target.innerText;
    this.setState({
      walgreensCard: name
    })
  }

  renderSnapshot = (e) => {
    let name = e.target.innerText;
    this.setState({
      snapshotCard: name
    })
  }


  render() {
    return (
      <div className="App">
        <header className='header'>
        </header>
        <section className='intro'>
          <div className='intro-image'></div>
          <p className='intro-header'>LIBBY YEH</p>
          <p className='intro-details'>My foundation 
          is as a marketer with over 12 years managing marketing, consumer 
          research & design, and product development
          in diverse industries and environments. </p>
        </section>
        <section className='project-grid'>Latest Projects
          <div className='project-container'>
            <div className='project-image'></div>
            <div className='project-title-box'>Chime
              <button className='start' onClick={this.renderChime}>Learn More</button>
            </div>
          </div>
          <div className='project-container'>
            <div className='project-image-2'></div>
            <div className='project-title-box'>DIGI
              <button className='start' onClick={this.renderDigi}>Learn More</button>
            </div>
          </div>
          <div className='project-container'>
            <div className='project-image-3'></div>
            <div className='project-title-box'>Walgreens
              <button className='start' onClick={this.renderWalgreens}>Learn More</button>
            </div>
          </div>
          <div className='project-container'>
            <div className='project-image-4'></div>
            <div className='project-title-box'>Snap-shot
              <button className='start' onClick={this.renderSnapshot}>Learn More</button>
            </div>
          </div>
        </section>
        <Chimecard name={this.state.chimeCard} />
        <Digicard name={this.state.digiCard} />
        <Walgreenscard name={this.state.walgreensCard} />
        <Snapshotcard name={this.state.snapshotCard} />
      </div>
    );
  }
}

export default App;
