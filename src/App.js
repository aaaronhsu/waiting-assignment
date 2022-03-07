import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cards from './components/Cards';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id_level: .5,
      superego_level: .5,

      cards: [
        {id: 1, name: 'Test Decision 1', description: 'Test Description 1', id_impact: -.1, superego_impact: .1},
      ],
    };

    
  }

  render() {
    return (
      <div>
        
        <div className="decision-box">

          <div className="card-box">
            <Cards 
              cards={this.state.cards}
            />
          </div>

        </div>

      </div>
    )
  };


}

export default App;
