// import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useCallback } from 'react';
import CreateUser from './components/CreateUser.js'
import UserList from './components/UserList.js'



function App() {
  const [users ,setUsers] = useState([
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
  ]);

  const nextId = useRef(users.length + 1);

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  })
  const {name, email} = inputs;

  const onChange = useCallback((e) => {
    // console.log(e.target);
    const {value , name} = e.target;
    setInputs({
      ...inputs,
      [name]:value,
    })
  },[inputs])

  const onSubmit = useCallback(()=>{
    // console.log(inputs);
    const user = {
      id: nextId.current,
      name,
      email,
      active: false
    }
    setUsers([...users, user])
    setInputs({
      name: '',
      email: ''
    })
    nextId.current += 1;
  },[users,name,email])

  const onRemove = useCallback((id) =>{
    setUsers(users.filter(user => user.id !== id));
  },[users])

  const onToggle = useCallback((id) => {
    setUsers(users.map((user) => user.id === id ? {...user,active: !user.active} : user ))
  },[users])

  return (
    <div className="App">
      <CreateUser name={name} email={email} onChange={onChange} onSubmit={onSubmit}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  )
}

export default App;
