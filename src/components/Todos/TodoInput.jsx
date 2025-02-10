import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = () => {

  const{'insert-btn': insert, input} = styles;

 
  const[click, SetClick] = useState(false);

  return (
    <>
      <div className='form-wrapper' style={{display: click ? "block" : "none"}}>
        <form className='insert-form'>
          <input 
            type='text'
            placeholder='할 일을 입력 후, 엔터를 누르세요!'
            className={input}
                   
         />
        </form>
      </div>
      <button
        className={`${insert} ${click ? styles.open : ""}`} 
        onClick={() => SetClick(!click)} 
      >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
