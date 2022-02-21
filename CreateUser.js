import React from 'react';

function CreateUser({ username, email, example, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="첫번째 항목"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="두번째 항목"
        onChange={onChange}
        value={email}
      />
      <input
        name="example"
        placeholder="세번째 항목"
        onChange={onChange}
        value={example}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;