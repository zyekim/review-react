import  React, {useEffect} from 'react';

const User = ({user, onRemove,onToggle,}) => {
  const {name,email,id,active} = user

  useEffect(() => {
    console.log('설정됨')
    console.log(user);
    return() =>{
      console.log('바뀌기 전');
      console.log(user);
    }
  },[user])
  return(
    <div>
      <b style={{color: active ? "green" : "" }} onClick={() => onToggle(id)}>{name}</b>, <span>{email}</span>
      <button style={{ marginLeft: "10px", backgroundColor: "transparent", fontSize: "14px", padding: 0, border: 0,}} onClick={() => onRemove(id)}>🗑️</button>
    </div>
  )
}

function UserList({users,onRemove,onToggle,}){

  return (
    <ul>
    {users.map((user)=><User user={user} onRemove={onRemove} onToggle={onToggle} key={user.id} />)}
    </ul>

  )
}

export default UserList;