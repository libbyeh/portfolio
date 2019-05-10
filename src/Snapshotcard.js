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
            to optimize learning retention and recall</h3>
          </div>
          <div className='img'>
            <div className='chime-image'></div>
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
          <h3 className='headline'>Onboarder</h3>
            <p className='details flow-details'>The onboarding experience is a result of additional user testing. It was identified that users did not
            understand how to get started and what "positivity pings" were. While they are the surprise & delight experience in the app, initial presentation
            and explanation is beneficial</p>
            <div className='flow-1-image'></div>
          <h3 className='flow-headline'>Active User</h3>
            <p className='details flow-details'>An active user has several paths they can take. The happy path to find new indiviual supporters or groups is very 
            simple without too many steps. Both paths then lead to access to the 'positivity ping" page.</p>
            <div className='flow-2-image'></div>
        </div>
        <div className='wireframe-section'>
          <h6 className='pre-headline'>WIREFRAMING</h6>
          <h2 className='headline'>Content & Functionality Layout</h2>
          <p className='details wireframe-details'>I created simple wireframes to coordinate the content heirarchy and general layout.
          These wireframes helped outline what should be on each page and used for user testing. Built in Sketch, the initial user flow called for 25 screens, 
          which eventually grew to 47 total screens inclusive of onboarding and pop-up screens to efficiently guide the user through the app. </p>
            <div className='wireframe-image'></div>
        </div>
        <div className='prototype-section'>
          <h6 className='pre-headline'>HI-FI PROTOTYPES</h6>
          <h3 className='headline'>Onboarding Prototypes</h3>
            <div className='prototype-img prototype-1-image'></div>
          <h3 className='headline featured-details'>Featured Prototypes</h3>
            <div className='prototype-img prototype-2-image'></div>
        </div>
        <div className='footer'>
            <div className='footer-me'>
              <h5 className='footer-name'>LIBBY YEH</h5>
              <h5 className='footer-role'>UX/UI DESIGNER & DEVELOPER</h5>
              <h6 className='footer-copyright'>©2019 LibbyYeh All Rights Reserved.</h6>
            </div>
            <div className='footer-contact'>
              <h5 className='footer-email'>Email: esnider1699@gmail.com</h5>
              <button className='start' onClick={this.renderResume}>View Resume</button>
            </div>
          </div> 
      </div>
    )
   }
  }
}
export default Snapshotcard;