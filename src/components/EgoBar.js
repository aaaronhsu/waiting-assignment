import React, { Component } from 'react';
import '../css/StatusBar.css';
import '../css/Buttons.css';

class EgoBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {
    return (
      <div className="ego-bar">

        EgoBar: {1 - 2 * (this.props.id_level - this.props.superego_level)}

      </div>
    )
  };


}

export default EgoBar;
