import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import PostData from './db/data.json'
import DataTable from './DataTable'
import './App.css'

function App() {

  const [inputs, setInputs] = useState({
    input: '',
    setInputs: ''
  });

  const { username, email, example } = inputs;

  const onChange = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: '이름1',
      email: 'TEST1@gmail.com',
      example: 'TEST1',
      active: true
    },
    {
      id: 2,
      username: '이름2',
      email: 'TEST2@gmail.com',
      example: 'TEST2',
      active: false
    },
    {
      id: 3,
      username: '이름3',
      email: 'TEST3@gmail.com',
      example: 'TEST3',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
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

    // console.log(nextId); // nextId 확인
    // console.log(user); // 추가하는 항목
    // console.log(users); // 전체 배열

    // const { users } = this.state;
    const myObjStr = JSON.stringify(users);
    const myObjStr2 = JSON.parse(myObjStr);
    console.log(myObjStr2);

    // front-end 단에서 File System 동작 안함..
    // const fs = require('fs');
    // fs.writeFile('./data.json', JSON.parse(myObjStr), (err) => {
    //   if (err) console.log('Error', err)
    // });
    
  };

  const onSave = () => {
    // browser localStorage에 Data 저장
    // https://shyunju7.tistory.com/37
    const myObjStr = JSON.stringify(users);
    window.localStorage.setItem("user", myObjStr);
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id ?
        { ...user, active: !user.active } : user
    ))
  };

  return (
    <>
      {/* Read user Array */}
      <div>
        <CreateUser onChange={onChange} onCreate={onCreate} onSave={onSave}/>
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      </div>

      {/* Read json Files */}
      {/* <div>
        {PostData.map((user, index) => {
          return <div>
            <b>{user.username}</b>
            &nbsp;
            <>({user.email})</>
            &nbsp;
            <b>[{user.example}]</b>
            {
              PostData.map(inputData => {
                console.log("inputData", inputData)
                return (
                  <div>
                    <label>{inputData.label}</label>
                  </div>
                )
              })
            }
          </div>
        })}
      </div> */}

      {/* Read DataTable */}
      {/* <div className="App">
        <DataTable />
      </div> */}
    </>
  );
};

export default App;