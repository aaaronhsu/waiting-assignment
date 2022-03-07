import React, { Component } from 'react';
import '../css/StatusBar.css';

class EgoBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {
    return (
      <div>

        EgoBar: {1 - 2 * (this.props.id_level - this.props.superego_level)}

      </div>
    )
  };


}

export default EgoBar;
