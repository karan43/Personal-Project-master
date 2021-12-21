import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';

import './featureproduct.css';
import '../mediaqueries.css'
export default class FeatureProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: []
    }
  }
  componentDidMount() {
    const { featureurl } = this.props;
    this.setState(
      {
        features: featureurl
      });
  }
  render() {
    const { features } = this.state;
    if (features.length) {
      return (
        <div className="features-main">
          <div className='container'>
            <h2 className="features-head">FEATURED PRODUCT</h2>
            {features.map(feature => {
              return (
                <div key={feature.id} className="row">
                  <div className="col-sm-6">
                    <ScrollAnimation
                      animateIn='zoomIn'
                      animateOnce={true}>
                      <div className="features-description">
                        <h3 className="features-h">{feature.title}</h3>
                        <p className="features-p">{feature.description}</p>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                    <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12">
                      <div className="team-card "  >
                        <img className="height" src="" alt="" />
                        <div>
                          <h3>name</h3>
                          <p>top</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12">
                      <div className="team-card" >
                        <img className="height" src="" alt="" />
                        <div>
                          <h3>name</h3>
                          <p>top</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12">
                      <div className="team-card" >
                        <img className="height" src="" alt="" />
                        <div>
                          <h3>name</h3>
                          <p>top</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12">
                      <div className="team-card" >
                        <img className="height" src="" alt="" />
                        <div>
                          <h3>name</h3>
                          <p>top</p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      );
    }
    else {
      return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }
}
