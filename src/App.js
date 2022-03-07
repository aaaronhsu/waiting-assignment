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
      id_level: .6,
      superego_level: .3,

      cards: [
        {id: 1, name: 'Test Decision 1', description: 'Test Description 1', id_impact: -.1, superego_impact: .1},
        {id: 1, name: 'Test Decision 2', description: 'Test Description 2 walfhtioyawfhtoyiawhftyoiawfhtoyawh fotyawhfoyt hawofy aowyft hawofyu thaoyft haowyft hoawyfh toaywf htoyawfh toaw hftoyaw htoyauw hftoyawu hftoyawu htoyawu htoyawh ftoyawh ufoty uahwfot uhawfoytuh awfoytuh awfoytuh awfoytuh awofytuh awofythu awoyftuh aowyfuh toaywfht oaywfh toaywfuht aowyfut hawoyftuh awofytuh awofytuh awoftuh awofytuh awofytuh ', id_impact: .3, superego_impact: -.4},
      ],
    };

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
              />
            </Center>

          </div>

        </div>

      </div>
    )
  };


}

export default App;
