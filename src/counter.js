import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  increment = () => {
    const { max, step } = this.props;
    this.setState((state) => {
      if (state.count >= max) return;
      return { count: state.count + step };
    });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
