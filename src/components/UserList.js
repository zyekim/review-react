import  React, { useContext } from 'react';
import { UserDispatch } from '../App';

const User = React.memo(function({user}) {
  const {username,email,id,active} = user;
  const dispatch = useContext(UserDispatch);
  // [useEffect 예시]
  // useEffect(() => {
  //   console.log('설정됨')
  //   console.log(user);
  //   return() =>{
  //     console.log('바뀌기 전');
  //     console.log(user);
  //   }
  // },[user]);


  return(
    <div>
      <b style={{color: active ? "green" : "" }} onClick={() => {
        dispatch({type:'TOGGLE_USER',id})
      }}>{username}</b>, <span>{email}</span>
      <button style={{ marginLeft: "10px", backgroundColor: "transparent", fontSize: "14px", padding: 0, border: 0,}}
      onClick={() => {
        dispatch({type:'REMOVE_USER',id})
      }}>🗑️</button>
    </div>
  )
});

function UserList({ users }){
// [context API] onRemove={onRemove} onToggle={onToggle} 와 prop 삭제
  return (
    <ul>
      {users.map((user)=><User user={user}  key={user.id} />)}
    </ul>

  )
}

export default React.memo(UserList);