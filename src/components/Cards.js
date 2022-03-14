import React, { Component } from 'react';
import '../css/Cards.scss';
import '../css/Buttons.scss';

class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {

    let card;
    let accept;
    let reject;

    if (this.props.cards.length > 0) {
      card = 
        <div className="card-box">
          <div className="card-header">
            <h3>{this.props.cards[0].name}</h3>
          </div>
          <div className="card-body">
            <p>{this.props.cards[0].description}</p>
          </div>

          <div className="card-footer">
            <p>Cards Left: {this.props.cards.length}</p>
          </div>
        </div>

      accept =
        <div>
          <button className="card-accept" onClick={() => this.props.acceptCard()}>Accept</button>
        </div>
      
      reject =
        <div>
          <button className="card-reject" onClick={() => this.props.rejectCard()}>Reject</button>
        </div>
    }
    else {
      card = <p>no more cards</p>
    }

    return (
      <div className="cards">

        {reject}
        {card}
        {accept}

      </div>
    )
  };


}

export default Cards;
