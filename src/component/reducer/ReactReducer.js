import React, { useReducer } from 'react';

const INITIAL = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {
        count: state.count + 1,
      };
    case 'decrease':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const ReactReducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increase' })}>increase</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>decrease</button>
    </div>
  );
};

export default ReactReducer;
