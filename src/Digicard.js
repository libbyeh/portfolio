import React, { Component } from 'react';
import './styles/main.scss';

class Digicard extends Component {
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
            <h6 className='intro-pre-headline'>CX CASE STUDY</h6>
            <h1 className='main-headline'>WESTERN UNION BRAND EXPERIENCE</h1>
            <h3 className='subhead'>Creating an ownable, positive and consistent Western Union 
            Brand Experience at retail.</h3>
          </div>
          <div className='img'>
            <div className='wu-image'></div>
          </div>
        </div>
        <div className='secondary-section'>
          <div className='role-section'>
            <h4 className='role-name'>Role</h4>
            <h5 className='role-description'>Research</h5>
            <h5 className='role-description'>Content Strategy</h5>
            <h5 className='role-description'>Deployment Design & Planning</h5>
          </div>
          <div className='tech-section'>
            <h4 className='tech-name'>Technology</h4>
              <h5 className='tech-tool'>Salesforce.com</h5>
          </div>
          <div className='team-section'>
            <h4 className='role-name'>Team</h4>
            <h5 className='role-description'>Cross-Functional Team Initiative</h5>
          </div>
        </div>
        <div className='problem-section'>
          <h2 className='headline obj-head'>The Objective</h2>
          <p className='details objective-details'>Improve the brand and consumer experience at 
          retail through a complete overhaul of the retail experience.</p>
          <div className='indicators'>
          <h2 className='indicators key-indicators'>Key Performance Indicators:</h2>
              <p>1. Drive incremental revenue and same-store sales.</p>
              <p>2. Imporve Net Promoter Scores.</p>
              <p>3. Increase the cross-sell & up-sell of Western Union products & services.</p>
          </div>    
        </div>
        <div className='research-section'>
          <div className='research-head'>
            <h6 className='pre-headline'>USER RESEARCH RESULTS</h6>
            <h2 className='headline'></h2>
            <p className='details research-details'>The result of consumer intercept & ethnographic research, customer 
            experience mapping, path-to-purchase analysis and consumer persona development was a holistic retail design 
            encompassing exterior & interior signage, wayfinding and fixtures that reinforced customers' perception
            of Western Union as a modern yet reliable brand.</p>
          </div>
          <div className='user-images'>
            <div className='process-image-1'></div>
          </div>
          <div className='findings'>
            <h2 className='findings accomplishments'>Key Accomplishments:</h2>
              <p>1. High-impact signage & merchandising that builds awareness & engagement.</p>
              <p>2. Relevant messaging at each customer touch point that creates additional engagement.</p>
              <p>3. Simple, easy, repeatable transaction process.</p>
              <p>4. Solutions appropriate across all retail footprints and retail zones. </p>
              <p>5. Solutions that cover investment flexibilityto allow for differentiation.</p>
          </div>
        </div>
        <div className='user-goal-section'>
          <h6 className='pre-headline'></h6>
          <h2 className='headline'>The Evolution</h2>
          <p className='details evolution-details'>After a successful, nationwide launch of the the new 
          Western Union Brand Experience, we initiated a pilot test for innovative digital signage, supporting new 
          fixtures & content strategy. Digital signage allowed us to remotely manage marketing content.</p> 
        </div>
        <div className='competitor-section'>
          <h6 className='pre-headline'>PROCESS</h6>
          <h2 className='headline'>Salesforce.com Solution</h2>
          <p className='details sfdc-details'>The Salesforce.com platform allows us to assign projects to internal users who then assign
          customized marketing content kits to specific retail locations. The automated delivery will update assigned kiosks in real-time and can be customized
          down to a single retail location.</p>
          <div className='comp-image'></div>
        </div>
        <div className='persona-section'>
          <h6 className='pre-headline'>ADDITIONAL RESEARCH</h6>
          <h2 className='headline'>Customer Intercepts</h2>
          <p className='details intercept-details'>Customer intercept research was conducted to determine if the new digital
          signage and messaging improved the customer experience. We gathered 283 customer intercepts over the course of 5 days.
          Overall, the digital signage had a positive impact on customers' experience and perception of the Western Union brand.</p>
          <div className='persona-images'>
            <div className='digi-image-1'></div>
          </div>
        </div>
        <div className='wireframe-section'>
          <h6 className='pre-headline'>IN-STORE</h6>
          <h2 className='headline'>Placement is Key to Success</h2>
          <p className='details instore-details'>The success of the digital signage is still largely dependant on
          placement in the store location. In general, when placed by the customer service counter, we saw a large increase in
          visibility of content and therefore usage. Many called for additional interaction on the digital screens which was 
          subsequently added to the Digital Signage roadmap for future iteration.</p>
            <div className='instore-image'></div>
        </div>
        <div className='prototype-section'>
          <h6 className='pre-headline'>FINAL DESIGN </h6>
          <h3 className='headline'>Mobile Collaboration</h3>
          <p className='details stagepay-details'>The final product that rolled out was a collaborative effort with the mobile team. 
          Stage & Pay refers to the customer setting up their transaction on the western Union App and then completing the cash transaction
          at a retail location. Our digital signage was key in providing informational and promotional marketing to in-store customers regarding the
          new service. The Salesforce.com delivery system allowed us to efficiently release content in-line with the mobile service release dates.</p>
            <div className='prototype-img stage-image'></div>
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
export default Digicard;