import React, { useState } from 'react';
import styles from './CourseInput.module.css';
import Button from '../ui/Button';

const CourseInput = ({ onAdd }) => {

  const { 'form-control': formControl, invalid } = styles;

  const [enteredText, setEnteredText] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력값 검증
    if (!enteredText.trim()) {
      setIsValid(false);
      return;
    }

    onAdd({
      id: Math.random().toString(),
      text: enteredText,
    });

    // 전송이 끝나면 입력창 비우기
    setEnteredText('');
    // document.querySelector('input').focus();
  };

  const handleGoalInput = (e) => {
    const inputValue = e.target.value;

    // 입력값 검증
    if (inputValue.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredText(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${formControl} ${!isValid ? invalid : ''}`}>
        <label
          // style={{ color: isValid ? 'black' : 'red' }}
        >나의 목표</label>
        <input
          type='text'
          onInput={handleGoalInput}
          value={enteredText}
          // style={{
          //   background: isValid ? 'transparent' : 'salmon',
          //   borderColor: isValid ? 'black' : 'red',
          // }}
        />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
