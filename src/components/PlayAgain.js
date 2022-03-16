import React, { Component } from 'react';
import '../css/ReloadPage.scss';

class PlayAgain extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  refreshPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <div className="reload-page">

        {/* <button onClick={this.refreshPage()}>Play Again</button> */}

        <h3>Please reload the page to play again!</h3>

      </div>
    )
  };


}

export default PlayAgain;
