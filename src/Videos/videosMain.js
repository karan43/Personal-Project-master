import React,{ Component } from 'react';

import VideosCover from './coverpageVideos';
import VideosContent from './videosContent';
import { VideosList } from '../Data/Videos/videoslistdata';
import './videosMain.css';

export default class Videos extends Component{
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div>
        <VideosCover />
        <VideosContent videosurl={ VideosList } />
      </div>
    );
  }
}
