import React, { Component } from 'react';
import '../css/StatusBar.css';

class SuperegoBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {
    return (
      <div>

        SuperegoBar: {this.props.superego_level}

      </div>
    )
  };


}

export default SuperegoBar;
