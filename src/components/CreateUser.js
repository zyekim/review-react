import React from 'react';

const CreateUser = ({username, email, onChange, onSubmit}) => {
  return (
    <div style={{marginBottom:"20px", display:"flex", width: "430px", justifyContent: "space-between" }}>
      <input onChange={onChange} placeholder="이름" type="text" name="username" value={username}/>
      <input onChange={onChange} placeholder="이메일" type="text" name="email" value={email}/>
      <button onClick={onSubmit}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser)