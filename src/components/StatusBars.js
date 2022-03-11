import React, { Component } from 'react';
import '../css/StatusBars.css';
import '../css/Buttons.css';

import IdBar from './IdBar.js';
import SuperegoBar from './SuperegoBar.js';
import EgoBar from './EgoBar.js';


class StatusBars extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {
    return (
      <div>

        <IdBar id_level={this.props.id_level} />
        <SuperegoBar superego_level={this.props.superego_level} />

        <EgoBar id_level={this.props.id_level} superego_level={this.props.superego_level} />

      </div>
    )
  };


}

export default StatusBars;
