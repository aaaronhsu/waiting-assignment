import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Center from 'react-center';

import Cards from './components/Cards';
import StatusBars from './components/StatusBars';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id_level: 60,
      superego_level: 30,

      cards: [
        {id: 1, name: 'Test Decision 1', description: 'Test Description 1', accept_id_impact: -10, accept_superego_impact: 10, reject_id_impact: 10, reject_superego_impact: -10},
        {id: 2, name: 'Test Decision 2', description: 'Test Description 2', accept_id_impact: -20, accept_superego_impact: 20, reject_id_impact: 20, reject_superego_impact: -20},
        {id: 3, name: 'Test Decision 4', description: 'Test Description 4', accept_id_impact: -40, accept_superego_impact: 40, reject_id_impact: 40, reject_superego_impact: -40},
      ],
    };

  }

  removeCard = () => {
    let cards = [...this.state.cards];

    this.setState({
      cards: cards.slice(1)
    });
  };

  acceptCard = () => {
    let cards = [...this.state.cards];

    this.setState({
      id_level: Math.round(this.state.id_level + cards[0].accept_id_impact),
      superego_level: Math.round(this.state.superego_level + cards[0].accept_superego_impact),
    });

    this.removeCard();
  }

  rejectCard = () => {
    let cards = [...this.state.cards];

    this.setState({
      id_level: Math.round(this.state.id_level + cards[0].reject_id_impact),
      superego_level: Math.round(this.state.superego_level + cards[0].reject_superego_impact),
    });

    this.removeCard();
  }

  render() {
    return (
      <div>

        <div className="status-box">
          
          <StatusBars
            id_level={this.state.id_level}
            superego_level={this.state.superego_level}
          />

        </div>
        
        <div className="interactive-box">

          <div className="cards-box">

            <h2>List of cards:</h2>
            
            <Center>
              <Cards 
                cards={this.state.cards}

                acceptCard={() => this.acceptCard()}
                rejectCard={() => this.rejectCard()}
              />
            </Center>

          </div>

        </div>

      </div>
    )
  };


}

export default App;
