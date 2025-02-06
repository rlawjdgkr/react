import React, { useState } from 'react';

const Counter = () => {

  // useState의 리턴값 : 
  // 1- 상태관리 변수값
  // 2- 상태변경 함수
  const [count, setCount] = useState(0);
  console.log('1. init count: ', count);

  const increaseHandler = () => { 
    // 상태값을 업데이트할 때는 상태값에 직접 접근하면 안되고
    // 반드시 setter를 통해 업데이트해야함
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // 상태업데이트는 리렌더링 이후에 일어남
    console.log('2. count by click: ', count);
  };
  const decreaseHandler = () => setCount(count - 1);

  console.log('3. last count: ', count);
  return (
    <div>
      <h1>숫자: { count }</h1>
      <button onClick={increaseHandler}>증가</button>
      <button onClick={decreaseHandler}>감소</button>
    </div>
  );
};

export default Counter;
