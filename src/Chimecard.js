import React, { Component } from 'react';
import './styles/main.scss';

class Chimecard extends Component {
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
          <button className='btn' onClick={this.props.closeProject}>BACK TO HOME</button>
        </div>
        <div className='intro-section'>
          <div classname='header'>
            <h6 className='intro-pre-headline'>UX CASE STUDY</h6>
            <h1 className='main-headline'>CHIME</h1>
            <h3 className='subhead'>A chronically harmonious community for people living with severe 
            chronic pain</h3>
          </div>
          <div className='img'>
            <div className='chime-image'></div>
          </div>
        </div>
        <div className='secondary-section'>
          <div className='role-section'>
            <h4 className='role-name'>Role</h4>
            <h5 className='role-description'>UX/UI Designer</h5>
          </div>
          <div className='tech-section'>
            <h4 className='tech-name'>Technology</h4>
              <h5 className='tech-tool'>Sketch</h5>
              <h5 className='tech-tool'>Invision</h5>
              <h5 className='tech-tool'>Miro</h5>
              <h5 className='tech-tool'>Optimal Workshop</h5>
          </div>
          <div className='team-section'>
            <h4 className='role-name'>Team</h4>
            <h5 className='role-description'>Individual Project</h5>
          </div>
        </div>
        <div className='problem-section'>
          <h2 className='headline obj-head'>The Objective</h2>
          <p className='details objective-details'>My dad was diagnosed with Chronic Regional Pain Syndrome 5 years ago. 
          Also know as CRPS, it is defined by the constant and severely painful burning in one's limbs, in my dad's case, 
          in his legs & feet. After researching pain relief methods for CRPS, I found that whole body vibrations can significantly help with chronic 
          pain, but that means one would be bed/chair-ridden depending on your level of pain. I wanted to 
          better understand if people that live with severe chronic pain could benefit from new advances in mobile -technology 
          to relieve pain and still lead active lifestyles. However after user interviews were complete, I found people 
          were not looking for more treatment options but rather, connection and understanding. </p>
          <h2 className='headline problem-head'>The New Problem</h2>
          <p className='details problem-details'>People that live with severe chronic pain need a way to connect with 
          people who can relate to them and their pain-adapted lifestyles. It is hard to find support groups 
          specific to their chronic pain type and they would benefit from meeting people who can provide 
          additional support</p>
        </div>
        <div className='research-section'>
          <div className='research-head'>
            <h6 className='pre-headline'>USER RESEARCH</h6>
            <h2 className='headline'>Understanding Users Needs & Motivations</h2>
            <p className='details research-details'>True empathy was key to deeply understanding the problems and 
            realities of those I interviewed. They face extreme difficulties on a day-to-day basis. 
            By keenly listening and appreciating those hardships, I was able to better understand what they 
            really needed beyond their physical needs.</p>
          </div>
          <div className='user-images'>
            <div className='user-image-1'></div>
            <div className='user-image-2'></div>
            <div className='user-image-3'></div>
            <div className='user-image-4'></div>
          </div>
          <div className='findings'>
            <h2 className='findings research-key-findings'>Key Findings:</h2>
              <p>1. Users generally stick to daily routines and daily management of their pain.</p>
              <p>2. Users said staying positive is key to living with chronic pain.</p>
              <p>3. Users have trouble finding support groups or others dealing with the same pain or new friends in general.</p>
              <p>4. Users often choose not to share their pain experiences with loved ones and friends to not burden or worry them. </p>
              <p>5. Users need to stay active, including walking and exercise routines. They often do this alone but are open to doing with a friend.</p>
          </div>
        </div>
        <div className='user-goal-section'>
          <h6 className='pre-headline'>USER GOALS</h6>
          <h2 className='headline'>The Goals</h2>
          <div className='goal-image'></div>
        </div>
        <div className='competitor-section'>
          <h6 className='pre-headline'>COMPETITIVE ANALYSIS</h6>
          <h2 className='headline'>Competitor Feature Comparison</h2>
          <p className='details competitor-details'>Based on my user's goals, I collected insights on the competition to identify market gaps and usability issues 
          that Chime could solve for.</p>
          <div className='comp-image'></div>
          <div className='findings'>
            <h3 className='findings competitor-key-findings'>Chime has the opportunity to...</h3>
              <p>1. provide support groups that are more defined to specific pain diagnosis and allow for more intimate connections based on group sizing.</p>
              <p>2. allow the user to define its search for individual supporters that are near them.</p>
              <p>3. provide users with a library of positive affirmations, images & gifs specific to defined pain types to save or send to individuals 
              or group conversations. </p>
          </div>
        </div>
        <div className='persona-section'>
          <h6 className='pre-headline'>PERSONA</h6>
          <h2 className='headline'>A User Story</h2>
          <p className='details persona-details'>Meet Jake. He embodies the issues and behaviors of those that were interviewed.
          Rooted in key findings, Jake's characteristics and goals help further define and make decisions for my larger target audience.</p>
          <div className='persona-images'>
            <div className='persona-image-1'></div>
          </div>
        </div>
        <div className='mvp-section'>
          <h6 className='pre-headline'>MVP</h6>
          <h2 className='headline'>Minimum Viable Product Features</h2>
          <div className='mvp-images'>
            <div className='mvp-image-1'></div>
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
          <p className='details prototype-details'>Head to InVision to see Chime in action: https://invis.io/KVRMJACGYJF</p>
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
export default Chimecard;