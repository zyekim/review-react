// import logo from './logo.svg';
import './App.css';
import React, { useRef, useCallback, useReducer, createContext } from 'react';
import CreateUser from './components/CreateUser.js'
import UserList from './components/UserList.js'
import Counter from './components/Counter.js';


const initialState = {
  inputs:{
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: false,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ]
}
function reducer(state,action) {
  switch (action.type) {
    // [custom Hook]
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs:{
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   }
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

// context API
export const UserDispatch = createContext(null);

function App() {
  // [context API]
  // const [{ username, email },onChange,reset] = useInput({
  //   username: '',
  //   email: '',
  // })
  // const nextId = useRef(4);
  const [state,dispatch] = useReducer(reducer,initialState);
  const { users } = state;
  // [custom Hook]
  // const { name, email } = state.inputs;

  // [context API]
  // const onChange = useCallback(e =>{
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // },[]);


  // const onSubmit = useCallback(() =>{
  //   dispatch({
  //     type: 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email
  //     }
  //   });
  //   nextId.current += 1;
  //   reset();
  // },[ username,email,reset ])

  // [context API]
  // const onToggle = useCallback( id =>{
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id
  //   })
  // },[]);

  // const onRemove = useCallback( id =>{
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id
  //   })
  // },[]);

  return (
    <UserDispatch.Provider value={ dispatch }>
      <div className="App">
        <CreateUser/>
        <UserList users={users}/>
        <br/>
        <Counter />
      </div>
    </UserDispatch.Provider>
  )
}

export default App;
