import React from 'react';
import styles from './scss/TodoHeader.module.scss';

const TodoHeader = () => {

  const { day, 'tasks-left': left } = styles;
  
  return (
    <header>
      <h1>2025년 2월 6일</h1>
      <div className={day}>목요일</div>
      <div className={left}>할 일 3개 남음</div>
    </header>
  );
};

export default TodoHeader;
