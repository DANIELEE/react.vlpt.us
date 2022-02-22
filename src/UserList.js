import React from 'react';

function User({ user, onRemove, onToggle}) {
  return (
    <div>
      <b style={{
        cursor: 'pointer',
        color: user.active ? 'blue' : 'black'
      }}
        onClick={() => onToggle(user.id)}>
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      &nbsp;
      <span><b>[{user.example}]</b></span>
      &nbsp;
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
}

export default UserList;
