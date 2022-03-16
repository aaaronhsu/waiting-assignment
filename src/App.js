import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.scss';
import './css/Global.scss';

import Cards from './components/Cards';
import StatusBars from './components/StatusBars';
import GameOver from './components/GameOver';
import PlayAgain from './components/PlayAgain';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id_level: 50,
      superego_level: 50,
      game_lost: 0,

      cards: [
        {id: 1, name: 'Shuyu to the City', description: "But despite accepting Shuyu as his bride, he believed she was absolutely unpresentable outside his home village. That was why, after they were married the next summer, for two decades he had never let her visit him at the army hospital. Furthermore, for seventeen years, since the birth of their only child, he had remained separate from his wife. Whenever he was home, he would sleep alone in his own room. He didn't love her; nor did he dislike her. In a way he treated her like a cousin of sorts. (pg 5)", accept_description: "Bring Shuyu to live in the city", reject_description: "Leave Shuyu in the hometown", accept_id_impact: 0, accept_superego_impact: -20, reject_id_impact: 0, reject_superego_impact: 10},
        {id: 2, name: 'Hide Books', description: "After that visit, she started to borrow books from Lin. The hospital had a small library, but its holdings were limited to the subjects of politics and medical science. The two dozen novels and plays it had once owned had been surrendered to the bonfires built by the Red Guards before the city hall two months ago. (pg 15)", accept_description: "Create dust jackets for the books", reject_description: "Don't bother hiding the books", accept_id_impact: -5, accept_superego_impact: 10, reject_id_impact: 10, reject_superego_impact: -10},
        {id: 3, name: 'Popping Blisters', description: "The old woman moved an oil lamp closer. Lin squatted down to examine the two pairs of feet resting on the edge of the wooden bowl. Haiyan's feet had three small blisters, one on the ball of her right foot and two on her left heel; but Manna's soles were bloated with blisters that were shiny like tiny balloons. (pg 17)", accept_description: "Help pop Manna's blister", reject_description: "Walk away", accept_id_impact: 0, accept_superego_impact: 10, reject_id_impact: 0, reject_superego_impact: -10},
        {id: 4, name: 'Movie Night', description: 'On his desk in the office she left an envelope. It contained an opera ticket and a note in her round handwriting, which said: "This is for The Navy Battle of 1894 at 8:00 p.m. I hope you will go and enjoy it." He had seen the movie and knew the entire story, so he wondered whether he should return the ticket to her. (pg 21)', accept_description: "Watch the movie", reject_description: "Return the ticket to Manna", accept_id_impact: 20, accept_superego_impact: -20, reject_id_impact: -10, reject_superego_impact: 10},
        {id: 5, name: "Ran Su's Promise", description: '"Promise me then that you and Manna Wu will have no abnormal relationship unless you have divorced your wife and married her." By "abnormal" he meant "sexual." (pg 25)', accept_description: "Promise to not pursue a relationship with Manna", reject_description: "Ignore Ran Su's warning", accept_id_impact: -10, accept_superego_impact: 10, reject_id_impact: 10, reject_superego_impact: -10},
        {id: 6, name: 'A Night Out', description: "The next day when they were walking together in the late afternoon, she told him about the arrangement and even mentioned she would buy a bottle of plum wine and two pounds of smoked sausages. She got so carried away that she didn't notice the shock in his eyes. (pg 29)", accept_description: "Have sex with Manna", reject_description: "Tell Manna to return the key", accept_id_impact: 20, accept_superego_impact: -35, reject_id_impact: -10, reject_superego_impact: 10},
        {id: 7, name: 'Divorce Request #1', description: '"We cannot continue to be like this. Who am I? Your fiancee or your concubine? You must do something to change this situation."\n "What could I do?"\n "Ask Shuyu for a divorce."\n She looked close into his eyes, her lips pursed up. (pg 32)', accept_description: "Ask Shuyu for a divorce", reject_description: "Ignore the divorce request", accept_id_impact: 10, accept_superego_impact: -20, reject_id_impact: -10, reject_superego_impact: 10},
        {id: 8, name: 'Divorce Request #2', description: 'To her dismay, he went on to describe how he had not been able to divorce his wife this summer, how he could not abandon his daughter who was still so young and had hung on his neck all the time calling him papa, how he had tried to broach the topic with Shuyu but every time his courage had failed him, how he could not find any solid reason with which to persuade the local court to grant him a divorce, how the villagers viewed this matter differently from people in the city, how sorry he felt for Manna, who deserved a better man than himself. In short, he was hopeless and could not do a thing, at least for the time being. After he had finished, she asked, "What should we do then? Continue like this?" Her voice was devoid of any emotion. (pg 40)', accept_description: "Ask Shuyu for a divorce next year", reject_description: "Ignore the divorce request", accept_id_impact: 20, accept_superego_impact: -20, reject_id_impact: -20, reject_superego_impact: 10},
        {id: 9, name: 'Cousin Blind Date', description: 'In the spring of 1972 Lin Kong received a letter from his cousin Liang Meng, who had grown up in Wujia County and gone to the same middle school as Lin had. Now Liang Meng lived in Hegang, a coal-mining city about eighty miles west of Muji. Since they had not kept up a regular correspondence, his letter came as a surprise to Lin. He asked Lin to help him find a girlfriend in the army hospital, because he would like to marry a doctor or a nurse. (pg 43)', accept_description: "Help Liang Meng find a girlfriend", reject_description: "Ignore Liang Meng's request", accept_id_impact: -30, accept_superego_impact: 10, reject_id_impact: 10, reject_superego_impact: -10},
        {id: 10, name: 'Bensheng Bribery', description: "On second thought, he felt uncertain about his brother-in-law, who might just pocket the money without helping him. A bribe offered to such a man was always a dangerous investment. Two thousand yuan was a huge sum, more than the amount of his one and a half years' salary. It might be too much of a risk, although Bensheng was undoubtedly a greedy fellow who could sell his parents for that amount. (pg 69)", accept_description: "Gather money to bribe Bensheng", reject_description: "Ignore the possibility of bribing Bensheng", accept_id_impact: 10, accept_superego_impact: 20, reject_id_impact: -10, reject_superego_impact: 0},
        {id: 11, name: 'A Forced Divorce', description: "By 1983, Lin and his wife had already been separated for seventeen years, so with or without Shuyu's agreement, he would be able to divorce her the next year. That was why Manna was certain that he wouldn't make a great effort this time. She knew the workings of his mind: he would always choose an easy way out. (pg 7)", accept_description: "Force a divorce with Shuyu", reject_description: "Do not force a divorce with Shuyu", accept_id_impact: 40, accept_superego_impact: -40, reject_id_impact: -40, reject_superego_impact: 20},

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

  checkGameOver = (d_id, d_sego) => {
    if (this.state.id_level + d_id <= 0) {
      this.setState({
        game_lost: 1,
        id_level: 0,
      });

      return true;
    }
    else if (this.state.id_level + d_id >= 100) {
      this.setState({
        game_lost: 2,
        id_level: 100,
      });

      return true;
    }
    else if (this.state.superego_level + d_sego <= 0) {
      this.setState({
        game_lost: 3,
        superego_level: 0,
      });

      return true;
    }
    else if (this.state.superego_level + d_sego >= 100) {
      this.setState({
        game_lost: 4,
        superego_level: 100,
      });

      return true;
    }

    return false;
  }

  acceptCard = () => {

    let game_over = this.checkGameOver(this.state.cards[0].accept_id_impact, this.state.cards[0].accept_superego_impact);

    let cards = [...this.state.cards];

    if (!game_over) {
      this.setState({
        id_level: Math.round(this.state.id_level + cards[0].accept_id_impact),
        superego_level: Math.round(this.state.superego_level + cards[0].accept_superego_impact),
      });
    }

    this.removeCard();
  }

  rejectCard = () => {

    let game_over = this.checkGameOver(this.state.cards[0].reject_id_impact, this.state.cards[0].reject_superego_impact);

    let cards = [...this.state.cards];

    if (!game_over) {
      this.setState({
        id_level: Math.round(this.state.id_level + cards[0].reject_id_impact),
        superego_level: Math.round(this.state.superego_level + cards[0].reject_superego_impact),
      });
    }

    this.removeCard();
  }

  render() {
      
    return (
      <div>

        <h1 className="title">
          Waiting
        </h1>
        <p className="header">
          <i>Waiting</i>, by Ha Jin, is a story about a Lin, a war general who struggles 
          to balance his desires (<span className="id-color">ID</span>) with the way that others perceive him (<span className="superego-color">Superego</span>). 
          Accept or reject Lin’s actions and try to keep his <span className="id-color">ID</span> and <span className="superego-color">Superego</span> away from 
          the extremes.
        </p>

          <div>
            <div className="status-box">
              
              <StatusBars
                id_level={this.state.id_level}
                superego_level={this.state.superego_level}
              />
    
            </div>

            {

              this.state.game_lost != 0 ? <GameOver game_lost={this.state.game_lost} /> :
              <div className="interactive-box">
      
                <div className="cards-box">
                  
                  <Cards 
                    cards={this.state.cards}
      
                    acceptCard={() => this.acceptCard()}
                    rejectCard={() => this.rejectCard()}
                  />
      
      
                </div>
      
              </div>

            }
            
          </div>
        </div>

    )
  };


}

export default App;
