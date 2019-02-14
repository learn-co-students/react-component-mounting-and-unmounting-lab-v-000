import React from "react";

class Pancake extends React.Component {
  constructor(props) { // for timeCooked, flippedAt
    super(props);

    this.state = {
      timeCooked: 0,
      flippedAt: undefined
    };
  }
  setTimeCooked =()=>this.setState({timeCooked: this.state.timeCooked + 1});
  startInterval=()=>this.interval = setInterval(this.setTimeCooked, 1000);
  cleanUpInterval=()=>clearInterval(this.interval);
  setFlippedAt=()=>this.setState({flippedAt: this.state.timeCooked});
  getPancakeStatus = () => {
    const { timeCooked, flippedAt } = this.state;
    // first side
    if (!flippedAt) {
      if (timeCooked < 2) return "raw";
      if (timeCooked === 2) return "cooked";
      return "burnt";
    }
    //second side
    if (flippedAt > 2 || timeCooked > 4) return "burnt";
    if (timeCooked === 4 && flippedAt === 2) return "cooked";
    return "raw";
  };
  takeItOffHandler = () => {
    const { id } = this.props;
    const { timeCooked, flippedAt } = this.state;
    let status = this.getPancakeStatus();
    this.props.takeItOff(id, status);
  };

  render() {
    const { timeCooked, flippedAt } = this.state;
    const firstSide = Boolean(this.state.flippedAt === undefined);
    const status = this.getPancakeStatus();

    return (
      <div className={`Pancake --${status}`}>
        <div className="Pancake__content">
          <p>I am a pancake.</p>
          <p>
            Time cooked on {`${firstSide ? "first" : "second"}`} side:{" "}
            {`${firstSide ? timeCooked : timeCooked - flippedAt}`}
          </p>
          <div>
            {firstSide ? (
              <button onClick={this.setFlippedAt}>Flip me!</button>
            ) : (
              <button onClick={this.takeItOffHandler}>Take me off!</button>
            )}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount(){this.startInterval()}
  componentWillUnmount(){this.cleanUpInterval()}
}

export default Pancake;
