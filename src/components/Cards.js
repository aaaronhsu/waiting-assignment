import React, { Component } from 'react';
// import './Cards.css';

class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id_level: .5,
      superego_level: .5,

      decisions: [
        {id: 1, name: 'Test Decision 1', description: 'Test Description 1', id_impact: -.1, superego_impact: .1},
      ],
    };

    
  }

  render() {
    return (
      <div>
        
        This is a card

      </div>
    )
  };


}

export default Cards;
