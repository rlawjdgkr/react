import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = ({onAdd}) => {
  const {
    'form-wrapper': wrapper,
    'insert-form': insertForm,
    'insert-btn': insertBtn,
    open : openstyle
  } = styles;

  // 입력창을 열어줄지 여부를 관리
  const [open, setOpen] = useState(false);

 // 할일 제목을 상태관리
 
 const [enteredTitle, setEnteredTitle] = useState(''); // 초기는 빈문자열

// 할일 제목 이벤트
 const handleTitleInput = e => {
  setEnteredTitle(e.target.value);
 }

  // 할일 추가 이벤트
  const handleSubmit = e => {
    e.preventDefault();
    onAdd(enteredTitle)
    setEnteredTitle('');
  }
  
  return (
    <>
      { 
        open &&
        <div className={wrapper}>
          <form className={insertForm} onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='할 일을 입력 후, 엔터를 누르세요!'
              onInput={handleTitleInput}
              value={enteredTitle}
            />
          </form>
        </div> 
      }
      <button className={`${insertBtn} ${open ? openstyle : ''}`} onClick={() => setOpen(!open)}>
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
