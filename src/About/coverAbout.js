import React , { Component } from 'react';

import './coverabout.css';
import '../mediaqueries.css';

export default class AboutCover extends Component{
  handleClick(){
    window.scrollTo(0,650);
  }

  render(){
    return(
      <div className='coverpage-about'>
          <div className='about-main-head'>
            <h1 className='main-head'>WHO WE ARE</h1>
            <div className='scroll' id='section07' onClick={this.handleClick}><span></span><span></span><span></span></div>
          </div>
      </div>
    );
  }
}
