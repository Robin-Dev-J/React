import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CountComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p><b>Count: </b>{state.count}</p>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#3498db',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '10px',
        }}
        onClick={() => dispatch({ type: 'increment' })}
      >
        Increment
      </button>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#e74c3c',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Decrement
      </button>
    </div>
  );
};

export default CountComponent;
