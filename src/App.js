// import logo from './logo.svg';
import './App.css';
import React, { useState, useRef,useEffect, useCallback, useReducer, useMemo } from 'react';
import CreateUser from './components/CreateUser.js'
import UserList from './components/UserList.js'
import Counter from './components/Counter.js';

const initialState = {
  inputs:{
    name: '',
    email: '',
  },
  users: [
    {
      id: 1,
      name: 'velopert',
      email: 'public.velopert@gmail.com',
      active: false,
    },
    {
      id: 2,
      name: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      name: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ]
}
function reducer(state,action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs:{
          ...state.inputs,
          [action.name]: action.value
        }
      }
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user]
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? {...user, active: !user.active} : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      return state
  }
}


function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const nextId = useRef(4)
  const { users } = state;
  const { name, email } = state.inputs;

  const onChange = useCallback(e =>{
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  },[]);


  const onSubmit = useCallback(() =>{
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        name,
        email
      }
    });
    nextId.current += 1;
  },[ name,email ])

  const onToggle = useCallback( id =>{
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  },[]);

  const onRemove = useCallback( id =>{
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  },[]);

  return (
    <div className="App">
      <CreateUser name={name} email={email} onChange={onChange} onSubmit={onSubmit}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <br/>
      <Counter />
    </div>
  )
}

export default App;
