import React, {useEffect} from 'react'

function User({user, onRemove, onToggle}) {
  useEffect(() => {
    // console.log('user값이 설정됨');
    // console.log(user);
  });

  const userStyle = {
    cursor : 'pointer',
    color : user.active ? 'green' : 'black'
  }

  return (
    <div>
      <strong style={userStyle} onClick={() => onToggle(user.id)}>{user.username}</strong><span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
}

export default React.memo(function UserList({users, onRemove, onToggle}) {

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  )
})
