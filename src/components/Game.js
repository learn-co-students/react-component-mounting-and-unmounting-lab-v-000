import React from 'react';
import Pancake from './Pancake';


// First, you want to record the time your shop was opened.Open < Game /> and notice a setCurrentTime() method already exits, but it is not yet called.Create a componentDidMount() method in <Game /> which will call the setCurrentTime() when the component is first created.If you've done that correctly, you should see the current time at the top of the page.

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

  //! TODO: create a componentDidMount() which will set the current time
  componentDidMount() {
    this.setCurrentTime();
  }
  
  setCurrentTime = () => {
    this.setState({ time: new Date(Date.now())});
  }

  addPancake = () => {
    this.setState({
      pancakes: this.state.pancakes.concat(Date.now())
    });
  }

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
        <button
          onClick={this.addPancake}
          className="Game__button"
        >
          New pancake!
        </button>
        <div className="Game__pancakes">{pans}</div>
      </div>
    )
  }
}

export default Game;
