import React from 'react';
import Pancake from './Pancake';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: undefined,
      pancakes: [],
      cooked: 0,
      burnt: 0,
      raw: 0
    };
  }

  setCurrentTime = () => this.setState({ time: new Date(Date.now())});
  // Add pancake event handler
  addPancake = () => this.setState({pancakes: this.state.pancakes.concat(Date.now())});
  // Set score
  takeItOff = (id, status) => {
    const { pancakes, cooked, burnt, raw } = this.state;
    this.setState({
      pancakes: pancakes.filter(pancake => !(pancake === id)),
      cooked: status === 'cooked' ? cooked + 1 : cooked,
      burnt: status === 'burnt' ? burnt + 1 : burnt,
      raw: status === 'raw' ? raw + 1 : raw
    });
  }

  
  render() {
    console.log("The time is: ", this.state.time)
    const { pancakes, burnt, cooked, raw, time } = this.state;
    const pans = pancakes.map((pancake, index) => <Pancake key={index} id={pancake} takeItOff={this.takeItOff} />);
    
    return (
      <div className="Game">
      <span>Pancake shop opened at: {time ? time.toString() : ''}</span>
      <div>
      <div className="Game__score --cooked">Cooked: {cooked}</div>
      <div className="Game__score --burnt">Burnt: {burnt}</div>
      <div className="Game__score --raw">Raw: {raw}</div>
      </div>
      <button onClick={this.addPancake} className="Game__button">
      New pancake!
      </button>
      <div className="Game__pancakes">{pans}</div>
      </div>
      )
    }
  componentDidMount(){this.setCurrentTime()}
  }

export default Game;
