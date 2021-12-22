import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

import './videosContent.css';

export default class VidoesContent extends Component{
  constructor(props){
    super(props);
    this.state={
      videos:[]
    }
  }
  
  componentDidMount(){
    const {videosurl} = this.props;
      this.setState(
        {
          videos:videosurl
        });
  }
  render(){
    const{ videos }=this.state;
      if(videos.length){
          return(
                  <div className='videos-content-main'>
                    <div className='container'>
                     
                    <div className="row videos-card">
                      {videos.map(videos =>
                          <div className='videos-content col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                            <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" key='id'>
                              <Card fluid className="videos-ui-card">
                                <div className="videos-pos-fixed">
                                  <img src={videos.url} alt='Devops' width="100%" height="70%" />
                                  <h3>{videos.title}</h3>
                                  <p>{videos.shortdescription}</p>
                                  <div className="videos-tag-div">
                                      <a className="videos-tag" href="/videos"><span>tag</span></a>
                                  </div>
                                </div>
                              </Card>
                            </a>
                          </div>
                      )}
                    </div>
                    </div>
                  </div>
          );
    }
    else{
        return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }

}
