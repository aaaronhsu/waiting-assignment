import React, { Component } from 'react';
import '../css/StatusBars.scss';

import ProgressBar from "@ramonak/react-progress-bar";

class SuperegoBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {
    return (
      <div className="superego-bar">

        superego-bar: {this.props.superego_level}

        <ProgressBar
          className="status-bar"
          completed={this.props.superego_level}
          bgColor="#b59ec3"
          labelColor="#ffffff"
          width="50%"
        />

      </div>
    )
  };


}

export default SuperegoBar;
