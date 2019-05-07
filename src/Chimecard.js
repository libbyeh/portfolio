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
          <button className='pop-btn' onClick={this.props.closeProject}>X</button>
        </div>
        <div className='intro-section'>
          <div classname='header'>
            <h6 className='intro-pre-headline'>UX CASE STUDY</h6>
            <h1 className='main-headline'>CHIME</h1>
            <h3 className='subhead'>A chronically harmonious community for people living with severe chronic pain</h3>
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
              <h5 className='tech-tool'>Sitemap</h5>
              <h5 className='tech-tool'>Optimal Workshop</h5>
          </div>
          <div className='team-section'>
            <h4 className='role-name'>Team</h4>
            <h5 className='role-description'>Individual Project</h5>
          </div>
        </div>
        <div className='problem-section'>
          <h2 className='headline'>The Problem</h2>
          <p className='problem-details'>People that live with severe chronic pain need a way to connect with people who can relate to them and their pain-adapted lifestyles. It is hard to find support groups specific to their chronic pain type and they would benefit from meeting people who can provide additional support</p>
        </div>
        <div className='research-section'>
          <div className='research-head'>
            <h6 className='pre-headline'>USER RESEARCH</h6>
            <h2 className='headline'>Understanding Users Needs & Motivations</h2>
            <p className='research-details'>The key to gaining insights from the users I researched, was to approach each person from an empathetic viewpoint.</p>
          </div>
          <div className='user-images'>
            <div className='user-image-1'></div>
            <div className='user-image-2'></div>
            <div className='user-image-3'></div>
            <div className='user-image-4'></div>
          </div>
          <div className='findings'>
            <h3 className='research-key-findings'>Key Findings</h3>
            <ul>
              <ol>Users generally stick to daily routines and daily management of their pain.</ol>
              <ol>Users said staying positive is key to living with chronic pain.</ol>
              <ol>Users have trouble finding support groups or others dealing with the same pain or new friends in general.</ol>
              <ol>Users often choose not to share their pain experiences with loved ones and friends to not burden or worry them. </ol>
              <ol>Users need to stay active, including walking and exercise routines. They often do this alone but are open to doing with a friend.</ol>
            </ul>
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
          <p className='competitor-details'>Lorum ipsum</p>
          <div className='comp-image'></div>
          <h3 className='competitor-key-findings'>Key Findings</h3>
          <ul>
            <ol>Find Chronic Pain Support Groups*general/large chronic pain support groups</ol>
            <ol>Support Group Chat but not near me</ol>
            <ol>Sending Positivity</ol>
          </ul>
        </div>
        <div className='persona-section'>
          <h6 className='pre-headline'>PERSONA</h6>
          <h2 className='headline'>A User Story</h2>
          <p className='persona-details'>People that live with severe chronic pain need a way to connect with people who can relate to them and their pain-adapted lifestyles. It is hard to find support groups specific to their chronic pain type and they would benefit from meeting people who can provide additional support</p>
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
            <p className='flow-details'>Lorum Ipsum</p>
            <div className='flow-1-image'></div>
          <h3 className='flow-headline'>Active User</h3>
            <p className='flow-details'>Lorum Ipsum</p>
            <div className='flow-2-image'></div>
        </div>
        <div className='wireframe-section'>
          <h6 className='pre-headline'>WIREFRAMING</h6>
          <h2 className='headline'>Content & Functionality Layout</h2>
          <p className='wireframe-details'>Lorum Ipsum</p>
            <div className='wireframe-image'></div>
        </div>
        <div className='prototype-section'>
          <h6 className='pre-headline'>HI-FI PROTOTYPES</h6>
          <h3 className='headline'>Onboarding Prototypes</h3>
          <p className='prototype-details'>Lorum Ipsum</p>
            <div className='prototype-1-image'></div>
          <h3 className='prototype-headline'>Featured Prototypes</h3>
          <p className='prototype-details'>Lorum Ipsum</p>
            <div className='prototype-2-image'></div>
        </div>
      </div>
    )
   }
  }
}
export default Chimecard;