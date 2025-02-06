import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

const ExpenseItem = ({ expense }) => {
  // console.log('props: ', props);
  const { title, price, date } = expense;

  // 상태값을 처리하는 함수(hook)
  /*
    useState훅의 리턴값은 배열이며
    첫번째 요소는 관리할 상태값의 초기값
    두번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수
  */
  const [itemTitle, setItemTitle] = useState(title);
  // console.log('itemTitle:', itemTitle);

  // 원화 표기법으로 변환
  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);


  return (
    <Card className='expense-item'>
      <ExpenseDate expenseDate={date} />
      <div className='expense-item__description'>
        <h2>{itemTitle}</h2>
        <div className='expense-item__price'>{formatPrice}원</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
