import React, { useReducer } from 'react';

function Counter() {
  // const [number, setNumber] = useState(0);

  function reducer(state,action) {
    switch (action.type) {
      case 'INCREMENT':
        return state +1;
      case 'DECREMENT':
        return state -1;

      default:
        throw new Error('unhandled action');
    }
  }
  const [number, dispatch] = useReducer(reducer,0); // 함수와 초기값

  const onIncrease = () =>{
    // setNumber(prev => prev + 1)
    dispatch({
      type: 'INCREMENT'
    })
  }
  const onDecrease = () =>{
    // setNumber(prev => prev -1 )
    dispatch({
      type: 'DECREMENT'
    })
  }
  return (
    <>
      <h4>{number}</h4>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>

  )
}

export default React.memo(Counter);