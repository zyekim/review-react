import React, { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  const onIncrease = () =>{
    setNumber(prev => prev + 1)
  }
  const onDecrease = () =>{
    setNumber(prev => prev -1 )
  }
  return (
    <>
      <h4>{number}</h4>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>

  )
}