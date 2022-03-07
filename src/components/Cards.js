import React, { Component } from 'react';
import '../css/Cards.css';

class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {
    return (
      <div>

        {this.props.cards.map(card => (
          <div className="card-box">
            
            <div className="card-header">
              <h3>{card.name}</h3>
            </div>
            <div className="card-body">
              <p>{card.description}</p>
            </div>
            
          </div>
        ))}

        <div className="card-footer">
          <p>Cards left: {this.props.cards.length}</p>
        </div>

      </div>
    )
  };


}

export default Cards;
