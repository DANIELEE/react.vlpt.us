import React, { useState, useRef } from 'react';

function InputSample() {

    const nameInput = useRef();

    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
        nickname2: ''
    });

    const { name, nickname, nickname2 } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
            nickname2: ''
        })

        nameInput.current.focus();
    };

    return (
        <div>
            <input
                name="name"
                placeholder='이름'
                onChange={onChange}
                value={name}
                ref={nameInput}
            >
            </input>
            <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname}></input>
            <input name="nickname2" placeholder='닉네임2' onChange={onChange} value={nickname2}></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname}) ({nickname2})
            </div>
        </div>
    );
};

export default InputSample;