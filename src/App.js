import React, { Component } from 'react';
import './styles/main.scss';
import Chimecard from './Chimecard.js';
import Digicard from './Digicard.js';
import Walgreenscard from './Walgreenscard.js';
import Snapshotcard from './Snapshotcard.js';
import Resume from './Resume.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      chimeCard: '',
      digiCard: '',
      walgreensCard: '',
      snapshotCard: '',
      resume: ''
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

  renderResume = (e) => {
    let name = e.target.innerText;
    this.setState({
      resume: name
    })
  }

  closeProject = () => {
    this.setState({
      chimeCard: '',
      digiCard: '',
      walgreensCard: '',
      snapshotCard: '',
      resume: ''
    })
  }


  render() {
    return (
      <div className="App">
        <header className='header'></header>
        <div className='start'>
          <button className='start' onClick={this.renderResume}>Resume</button>
        </div>
        <section className='intro'>
          <div className='intro-image'></div>
          <h1 className='intro-header'>LIBBY YEH</h1>
          <h3 className='intro-details'>UX/UI DESIGNER & DEVELOPER  |  CONTENT STRATEGIST</h3>
          <p className='intro-about'>Curious, empathic thinker & designer who is passionate about getting to the heart of what people's intrinsic needs and desires are.  
          </p>
        </section>
        <p className='arrow'>&#x25BC;</p>
        <p className='case-study-name'>CASE STUDIES</p>
        <section className='project-grid'>
          <div className='project-container'>
            <div className='project-details'>
              <h6 className='project-headline'>UX CASE STUDY</h6>
              <h4 className='project-title-box'>Chime</h4>
              <h5 className='project-info'>Social gathering app for people living with severe chronic pain looking to connect and support individuals or groups with the same diagnosis.</h5> 
                <button className='start' onClick={this.renderChime}>View Case Study</button>
            </div>
            <div className='project-img'>
              <div className='main-chime-image'></div>
            </div>
          </div>
          <div className='project-container'>
            <div className='project-details'>
              <h6 className='project-headline'>CX CASE STUDY</h6>
              <h4 className='project-title-box'>Western Union Brand Experience</h4>
              <h5 className='project-info'>Translation of consumer research and insights into a complete retail brand experience inclusive of signage, merchandising, and marketing content.</h5> 
                <button className='start' onClick={this.renderDigi}>View Case Study</button>
            </div>
            <div className='project-img project-image-2'>
              <div className='main-chime-image'></div>
            </div>
          </div>
          <div className='project-container'>
          <div className='project-details'>
              <h6 className='project-headline'>UI CASE STUDY</h6>
              <h4 className='project-title-box'>Walgreen's Landing Page</h4>
              <h5 className='project-info'>Landing Page for Western Union including wireframe development, hi-fidelity mockups, content strategy and video development.</h5> 
                <button className='start' onClick={this.renderWalgreens}>View Case Study</button>
            </div>
            <div className='project-img project-image-3'>
              <div className='main-chime-image'></div>
            </div>
          </div>
          <div className='project-container'>
            <div className='project-details'>
              <h6 className='project-headline'>DEVELOPMENT CASE STUDY</h6>
              <h4 className='project-title-box'>Snapshot</h4>
              <h5 className='project-info'>Professional-learning site fetching data from an API. Uses React to render individual pages each testing the user’s knowledge of advanced programming language & concepts.</h5> 
                <button className='start' onClick={this.renderSnapshot}>View Case Study</button>
            </div>
            <div className='project-img project-image-4'>
              <div className='main-chime-image'></div>
            </div>
          </div>
        </section>

        <Chimecard name={this.state.chimeCard} closeProject={this.closeProject} />
        <Digicard name={this.state.digiCard} closeProject={this.closeProject} />
        <Walgreenscard name={this.state.walgreensCard} closeProject={this.closeProject} />
        <Snapshotcard name={this.state.snapshotCard} closeProject={this.closeProject} />
        <Resume name={this.state.resume} closeProject={this.closeProject} />
      </div>
    );
  }
}

export default App;
