import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.scss';
import './css/Global.scss';

import Cards from './components/Cards';
import StatusBars from './components/StatusBars';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id_level: 60,
      superego_level: 30,

      cards: [
        {id: 1, name: 'Test Decision 1', description: 'Test Description 1 awyftu hawiftyhaowyfu hawyfuhto awyfuthawofyuthaowfyuthowyufthoaywufh toyawu ftoyau wfotya wftyu awfoytu hawfotyau whfoyawu fotyawufh ot aywuhfotyawuoauwh fouh oyu', accept_id_impact: -10, accept_superego_impact: 10, reject_id_impact: 10, reject_superego_impact: -10},
        {id: 2, name: 'Test Decision 2', description: 'Test Description 2', accept_id_impact: -20, accept_superego_impact: 20, reject_id_impact: 20, reject_superego_impact: -20},
        {id: 3, name: 'Test Decision 4', description: 'Test Description 4', accept_id_impact: -40, accept_superego_impact: 40, reject_id_impact: 40, reject_superego_impact: -40},
      ],
    };

    
  }

  removeCard = () => {
    let cards = [...this.state.cards];

    this.setState({
      cards: cards.slice(1),
      ego_level: Math.abs(this.state.ego_level - this.state.id_level)
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

    let game_over_message =
      <div className="game-over">
        <h1>Game Over</h1>
        <p>You have reached the end of the game. You have lost.</p>
      </div>
      
    return (
      <div>

        <h1 className="title">
          Waiting
        </h1>

        {
          this.state.id_level <= 0 || this.state.superego_level <= 0 ?

          game_over_message
          :
          <div>
            <div className="status-box">
              
              <StatusBars
                id_level={this.state.id_level}
                superego_level={this.state.superego_level}
              />
    
            </div>
            
            <div className="interactive-box">
    
              <div className="cards-box">
                
                <Cards 
                  cards={this.state.cards}
    
                  acceptCard={() => this.acceptCard()}
                  rejectCard={() => this.rejectCard()}
                />
    
    
              </div>
    
            </div>
          </div>
          
        }
  
          <div className="footer">
            <p>
              <i>
                Waiting</i>, by Ha Jin, is a story about a Lin, a war general who struggles 
                to balance his desires (<span className="id-color">ID</span>) with the way that others perceive him (<span className="superego-color">Superego</span>). 
                Accept or reject Lin’s actions and try to keep his <span className="id-color">ID</span> and <span className="superego-color">Superego</span> away from 
                the extremes.
            </p>
          </div>
        </div>

    )
  };


}

export default App;
