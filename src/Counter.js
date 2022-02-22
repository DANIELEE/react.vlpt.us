import React , {useState} from 'react';

function Counter() {

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber +1);
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber -1);
    }


    return (
        <div>
            <h1><b>{number}</b></h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;