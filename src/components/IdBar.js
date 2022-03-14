import React, { Component } from 'react';
import '../css/StatusBars.scss';

import ProgressBar from "@ramonak/react-progress-bar";

class IdBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {
    return (
      <div className="id-bar">

        id-bar: {this.props.id_level}

        <ProgressBar
          className="status-bar"
          completed={this.props.id_level}
          bgColor="#b59ec3"
          labelColor="#ffffff"
          width="50%"
        />

      </div>
    )
  };


}

export default IdBar;
