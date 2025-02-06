import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const TodoMain = () => {

  
  return (
    <ul className={styles['todo-list']}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

export default TodoMain;
