import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App(){

  const [inputs, setInputs] = useState({
    input: '',
    setInputs: ''
  });

  const {username, email, example} = inputs;

  const onChange = e => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name] : value
    });
  };

  const [users,setUsers] = useState([
    {
      id: 1,
      username: '이름1',
      email: 'TEST1@gmail.com',
      example : 'TEST1',
      active : true
    },
    {
      id: 2,
      username: '이름2',
      email: 'TEST2@gmail.com',
      example : 'TEST2',
      active : false
    },
    {
      id: 3,
      username: '이름3',
      email: 'TEST3@gmail.com',
      example : 'TEST3',
      active : false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () =>
  {
    const user = {
      id : nextId.current,
      username,
      email,
      example
    }

    setUsers([
      ...users, user
    ]);

    setInputs({
      username,
      email,
      example
    });

    nextId.current += 1;
    console.log(nextId); // nextId 확인을 위한 소스 추가
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id ?
      {...user,active : !user.active} : user
    ))
  };

  return(
    <div>
      <CreateUser onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
};

export default App;