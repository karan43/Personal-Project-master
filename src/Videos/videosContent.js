import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

import './videosContent.css';

export default class VidoesContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    const { videosurl } = this.props;
    this.setState(
      {
        videos: videosurl
      });
  }
  render() {
    const { videos } = this.state;
    if (videos.length) {
      return (
        <div className="row videos-card">
          <div className="col-md-4">
            <div className="laptop-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/6CIdvaDDu0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="col-md-4">
            <div className="laptop-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/6CIdvaDDu0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="col-md-4">
            <div className="laptop-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/6CIdvaDDu0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      );
    }
    else {
      return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }

}
