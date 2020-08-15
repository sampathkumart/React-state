import React from 'react';

const inc = (c) => c + 1;

const Count = () => {
  const [count, setCount] = React.useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(inc);
  const reset = () => setCount(0);

  return (
    <div className="Count">
      <p className="Count">{count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Count;
