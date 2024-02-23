import React, { useContext,useRef,useCallback } from 'react';
import useInput from '../hook/useInput.js';
import { UserDispatch } from '../App';

const CreateUser = () => {
  const [{ username, email },onChange,reset] = useInput({
    username: '',
    email: '',
  });
  const nextId = useRef(4);

  const dispatch = useContext(UserDispatch);

  const onSubmit = useCallback(() =>{
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
    reset();
  },[ username, email, reset ])

  return (
    <div style={{marginBottom:"20px", display:"flex", width: "430px", justifyContent: "space-between" }}>
      <input onChange={onChange} placeholder="이름" type="text" name="username" value={username}/>
      <input onChange={onChange} placeholder="이메일" type="text" name="email" value={email}/>
      <button onClick={onSubmit}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser)