import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  reset() {
    this.setState({ count: 0 });
  }
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
