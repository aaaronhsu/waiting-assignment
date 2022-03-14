import React, { Component } from 'react';
import '../css/GameOver.scss';

class GameOver extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  gameOverMessage = () => {
    let component;

    switch (this.props.game_lost) {
      case 1:
        component = <h3>You have neglected Lin's <span className="id-color">ID</span> and have lost the game</h3>;
        break;
      case 2:
        component = <h3>You have exceeded Lin's <span className="id-color">ID</span> and have lost the game</h3>;
        break;
      case 3:
        component = <h3>You have neglected Lin's <span className="superego-color">Superego</span> and have lost the game</h3>;
        break;
      case 4:
        component = <h3>You have exceeded Lin's <span className="superego-color">Superego</span> and have lost the game</h3>;
        break;
      default:
        component = <h3>You have lost the game</h3>;
        break;
    }

    return component;
  }

  render() {
    return (
      <div className="game-over">

        {
          this.gameOverMessage()
        }

      </div>
    )
  };


}

export default GameOver;
