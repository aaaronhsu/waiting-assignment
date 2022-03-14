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

        <ProgressBar
          className="status-bar"

          completed={this.props.id_level}
          customLabel={"ID"}
          bgColor="#96c6e6"
          labelColor="#ffffff"
          width="50%"
        />

      </div>
    )
  };


}

export default IdBar;
