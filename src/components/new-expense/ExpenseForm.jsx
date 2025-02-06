import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAdd, onCancel }) => {
  

  // 단일 상태값 관리
  // const [title, setTitle] = useState('');
  // const [price, setPrice] = useState(0);
  // const [date, setDate] = useState(null);

  const initialUserInput = {
    title: '',
    price: 0,
    date: '',
  };

  // 객체 상태값 관리
  const [userInput, setUserInput] = useState(initialUserInput);


  // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // form submit 이벤트
  const handleSubmit = e => {
    e.preventDefault();
    // console.log('submit!!');

    // const payload = {
    //   title,
    //   price,
    //   date
    // };

    console.log('payload: ', userInput);

    // 부모가 보낸 데이터전달용 함수를 호출
    onAdd({
      ...userInput,
      date: new Date(userInput.date)
    });


    // 입력창 비우기 - 상태값과 input을 연결하려면 양방향으로 연결해야함
    // input태그에 입력하면 상태값 userInput만 변경됨 - 단방향
    // userInput을 변경하면 input태그도 변경됨 - 양방향
    setUserInput(initialUserInput);
    
  };

  const handleTitleInput = e => { 

    // 리액트는 상태값변경은 반드시 setter를 통해서 수행
    // 상태값이 객체나 배열일 경우에는 항상 새로운 객체, 배열을 세팅하라
    setUserInput((prevState) =>  
       ({
        ...prevState,
        title: e.target.value,
        })
    );


  };
  const handlePriceInput = (e) => { 
    setUserInput({
      ...userInput,
      price: +e.target.value,
    });
  };
  const handleDateInput = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onInput={handleTitleInput}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='100'
            step='100'
            onInput={handlePriceInput}
            value={userInput.price}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max={getTodayDate()}
            onInput={handleDateInput}
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' className='cancel-btn' onClick={onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
