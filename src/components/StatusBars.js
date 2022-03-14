import React, { Component } from 'react';
import '../css/StatusBars.scss';
import '../css/Buttons.scss';

import IdBar from './IdBar.js';
import SuperegoBar from './SuperegoBar.js';


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

      </div>
    )
  };


}

export default StatusBars;
