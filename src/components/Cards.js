import React, { Component } from 'react';
import '../css/Cards.css';

class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {

    let card;
    if (this.props.cards.length > 0) {
      card = <div className="card-box" onClick={() => this.props.removeCard()}>
            
      <div className="card-header">
        <h3>{this.props.cards[0].name}</h3>
      </div>
      <div className="card-body">
        <p>{this.props.cards[0].description}</p>
      </div>
        
    </div>
    }
    else {
      card = <p>no more cards</p>
    }
    return (
      <div>

        {card}

        <div className="card-footer">
          <p>Cards left: {this.props.cards.length}</p>
        </div>

      </div>
    )
  };


}

export default Cards;
