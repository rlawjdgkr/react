import React from 'react';
import styles from './scss/TodoHeader.module.scss';

const TodoHeader = ({count}) => {

  const { day, 'tasks-left': left } = styles;
  
  const today = new Date();

  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  return (
    <header>
      <h1>{dateString}</h1>
      <div className={day}>{dayName}</div>
      <div className={left}>할 일 {count}개 남음</div>
    </header>
  );
};

export default TodoHeader;
