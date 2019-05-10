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
        <div className='btn'>
          <i class="fas fa-arrow-left"></i>
          <button className='btn' onClick={this.props.closeProject}>BACK TO HOME</button>
        </div>
        <div className='intro-section'>
          <div classname='header'>
            <h6 className='intro-pre-headline'>DEVELOPMENT CASE STUDY</h6>
            <h1 className='main-headline'>SNAPSHOT</h1>
            <h3 className='subhead'>An application that solves a common 
            problem that most students face - finding effective study techniques 
            to optimize learning retention and recall.</h3>
          </div>
          <div className='img'>
            <div className='snap-image'></div>
          </div>
        </div>
        <div className='secondary-section'>
          <div className='role-section'>
            <h4 className='role-name'>Role</h4>
            <h5 className='role-description'>UI Designer & Developer</h5>
          </div>
          <div className='tech-section'>
            <h4 className='tech-name'>Technology</h4>
              <h5 className='tech-tool'>Sketch</h5>
              <h5 className='tech-tool'>Fetch API</h5>
              <h5 className='tech-tool'>ReactJS</h5>
              <h5 className='tech-tool'>JSX</h5>
              <h5 className='tech-tool'>Sass</h5>
          </div>
          <div className='team-section'>
            <h4 className='role-name'>Team</h4>
            <h5 className='role-description'>Individual Project</h5>
          </div>
        </div>
        <div className='problem-section'>
          <h2 className='headline obj-head'>The Objective</h2>
          <p className='details objective-details'>Build an interactive study 
          application using modular, reusable code that follows 
          single responsibility principles.</p>
        </div>
        <div className='research-section'>
          <div className='research-head'>
            <h6 className='pre-headline'>MVP COMPONENTS</h6>
          </div>
          <div className='findings'>
            <h2 className='findings research-key-findings'></h2>
              <p>1. A dataset with 30 records with the ability to save data to local storage.</p>
              <p>2. Easy to navigate, multi-page interactions that is fully responsive.</p>
              <p>3. Functionality that is broken out into logical components with respective DRY CSS/Sass stylesheets.</p>
              <p>4. A test suite covering majority of the application. </p>
          </div>
        </div>
        <div className='user-flow-section'>
          <h6 className='pre-headline'>USER FLOW MAPS</h6>
          <h3 className='headline'>Simplified User Journey </h3>
            <p className='details snapflow-details'>The onboarding experience is a result of additional user testing. It was identified that users did not
            understand how to get started and what "positivity pings" were. While they are the surprise & delight experience in the app, initial presentation
            and explanation is beneficial</p>
            <div className='snapflow-1-image'></div>
        </div>
        <div className='wireframe-section'>
          <h6 className='pre-headline'>WIREFRAMING</h6>
          <h2 className='headline'>Content & Functionality Layout</h2>
          <p className='details wireframe-details'>Digital wireframes were leveraged for usability testing so that user behavior 
          could be monitored and feedback recorded.</p>
          <div className='snap-wireframe-images'>  
            <div className='snap-wireframe-image-1'></div>
            <div className='snap-wireframe-image-2'></div>
          </div>
        </div>
        <div className='prototype-section'>
          <h6 className='pre-headline'>UI DESIGN</h6>
          <h3 className='headline'>Main Interfaces</h3>
          <p className='details snapUI-details'>Webster's Dictionary defines snapshot as an appraisel, summary or profile. Flashcards also offer a brief appraisal of users' 
          knowledge of a particular subject. Snap-shot provides users a chance to test 
          their knowledge of array prototype methods while immersed in an elegant and easy-to-navigate UI. Users can also save individual 
          cards to practice later. Additionally, Snap-shot is built to scale to add more concepts in the future.</p>
            <div className='prototype-img snap-prototype-1-image'></div>
            <div className='prototype-img snap-prototype-2-image'></div>
            <div className='prototype-img snap-prototype-3-image'></div>
        </div>
        <div className='footer'>
            <div className='footer-me'>
              <h6 className='footer-copyright'>©2019 LibbyYeh All Rights Reserved.</h6>
            </div>
            <div className='footer-contact'>
              <h5 className='footer-name'>LIBBY YEH</h5>
              <h5 className='footer-role'>UX/UI DESIGNER & DEVELOPER</h5>
              <h5 className='footer-email'>Email: esnider1699@gmail.com</h5>
            </div>
          </div> 
      </div>
    )
   }
  }
}
export default Snapshotcard;