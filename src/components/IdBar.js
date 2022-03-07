import React, { Component } from 'react';
import '../css/StatusBar.css';

class IdBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {
    return (
      <div>

        idbar: {this.props.id_level}

      </div>
    )
  };


}

export default IdBar;
