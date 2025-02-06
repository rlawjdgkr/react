import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ expenseDate }) => {

  // 월을 영문으로 변환
  const month = expenseDate.toLocaleString('en-US', {month: 'long'});

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{expenseDate.getFullYear()}</div>
      <div className='expense-date__year'>{ month }</div>
      <div className='expense-date__day'>{ expenseDate.getDate() }</div>
    </div>
  );
};

export default ExpenseDate;
