import React, { Component } from 'react';
import './styles/main.scss';
import $ from 'jquery';

class About extends Component {
  constructor(props) {
    super();
  }


  render () {
    window.scroll(0, 0);
    if (!this.props.name) {
      return ( <div className='none'></div> );
    } else {
    return (
      <div className='popup'>
        <div className='btn'>
          <i class="fas fa-arrow-left"></i>
          <button className='btn' onClick={this.props.closeProject}>BACK TO HOME</button>
        </div>
        <section className='about-intro'>
        <div className='intro-image'></div>
          <h1 className='intro-header'>Hi, I'M LIBBY YEH</h1>
          <h3 className='intro-details'>UX/UI DESIGNER & DEVELOPER  |  CONTENT STRATEGIST</h3>
          <p className='intro-about'></p>
        </section>
        <section className='project-grid'>
          <div className='project-container'>
            <div className='project-details'>
              <h6 className='project-headline'>UX CASE STUDY</h6>
              <h4 className='project-title-box'>CHIME</h4>
              <h5 className='project-info'>Social gathering app for people living with severe chronic pain looking to connect and support individuals or groups with the same diagnosis.</h5> 
                <button className='start' onClick={this.renderChime}>View Case Study</button>
                <i class="fas fa-arrow-right"></i>
            </div>
            <div className='project-img'>
              <div className='main-chime-image'></div>
            </div>
          </div>
          <div className='project-container'>
            <div className='project-details'>
              <h6 className='project-headline'>CX CASE STUDY</h6>
              <h4 className='project-title-box'>WESTERN UNION BRAND EXPERIENCE</h4>
              <h5 className='project-info'>Translation of consumer research and insights into a complete retail brand experience inclusive of digital signage and marketing content.</h5> 
                <button className='start' onClick={this.renderDigi}>View Case Study</button>
                <i class="fas fa-arrow-right"></i>
            </div>
            <div className='project-img project-image-2'>
              <div className='main-chime-image'></div>
            </div>
          </div>
          <div className='project-container last-container'>
            <div className='project-details'>
              <h6 className='project-headline'>DEVELOPMENT CASE STUDY</h6>
              <h4 className='project-title-box'>SNAPSHOT</h4>
              <h5 className='project-info'>Professional-learning site fetching data from an API. Uses React to render individual pages each testing the user’s knowledge of advanced programming language & concepts.</h5> 
                <button className='start' onClick={this.renderSnapshot}>View Case Study</button>
                <i class="fas fa-arrow-right"></i>
            </div>
            <div className='project-img project-image-4'>
              <div className='main-chime-image'></div>
            </div>
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
        </section>
      </div>
    )
   }
  }
}
export default About;