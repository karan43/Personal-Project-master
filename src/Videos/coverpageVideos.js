import React,{ Component } from 'react';

import './coverpageVideos.css';

export default class VideosCover extends Component{
 handleClick(){
    window.scrollTo(0,650);
 }
 render(){
  return(
    <div className='coverpage-videos'>
        <div className='about-main-head'>
          <h1 className='main-head'> VIDEOS SECTION</h1>
            <div className='scroll' id='section07' onClick={this.handleClick}><span></span><span></span><span></span></div>
        </div>
    </div>
  );
 }
}
