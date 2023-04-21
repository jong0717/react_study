import React, {useContext } from 'react'
import { UserDispatch } from './App';

function User({user}) {
  const dispatch = useContext(UserDispatch)
  const userStyle = {
    cursor : 'pointer',
    color : user.active ? 'green' : 'black'
  }

  return (
    <div>
      <strong style={userStyle} onClick={() => {
        dispatch({type:'TOGGLE_USER', id:user.id });
      }}>{user.username}</strong> 
      <span>{user.email}</span>
      <button onClick={() => {
        dispatch({type:'REMOVE_USER', id:user.id});
      }}>삭제</button>
    </div>
  )
}

export default React.memo(function UserList({users}) {

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
})
