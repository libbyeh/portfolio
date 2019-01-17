import React, { Component } from 'react';
import './styles/main.scss';




class App extends Component {
  constructor() {
    super();
    this.state = {
      snapshot: [],
    }
  }


  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1 className='header-title'><span>Elizabeth Yeh</span> Portfolio</h1>
        </header>
        <section className='portfolio-grid'>
          <div className='box box1'></div>
          <div className='box box2'></div>
          <div className='box box3'></div>
          <div className='box box4'></div>
          <div className='box box5'></div>
          <div className='box box6'></div>
        </section>
      </div>
    );
  }
}

export default App;
