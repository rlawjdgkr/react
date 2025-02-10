import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';

const DUMMY_TODOS = [
  { id: 1, title: '리액트 공부', done: true },
  { id: 2, title: '점심 먹기', done: false },
  { id: 3, title: '프로젝트하기', done: false },
  { id: 4, title: '숙제하기', done: true },
];

const TodoTemplate = () => {

  // 할일 목록을 상태관리
  const [todoList, setTodoList] = useState(DUMMY_TODOS);

  // 데이터 상향식 전달을 위한 할 일 추가 함수 내려주기
  const addTodo = (newTitle) => { 
    const newTodo = {
      id: Math.random().toString()
      , title: newTitle
      , done: false
    };

    setTodoList([...todoList, newTodo]);
  };

  // 할 일 삭제 함수
  const removeTodo = (id) => { 
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  // 할 일 체크 함수
  const checkTodo = (id) => { 
    // console.log('체크된 id: ', id);

    // id로 할 일 객체 탐색
    // 기존 배열을 복제
    // const copyTodoList = [...todoList];
    // const foundTodo = copyTodoList.find((todo) => todo.id === id);
    
    // foundTodo.done = !foundTodo.done;
    // console.log(foundTodo);

    // setTodoList(copyTodoList);

    setTodoList(todoList.map(todo =>
      todo.id === id 
      ? { ...todo, done: !todo.done }
      : todo
    ));

  };

  // 남은 할 일의 개수 구하기
  const countRestTodo = todoList.filter(todo => !todo.done).length;

  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader count={countRestTodo} />
      <TodoMain items={todoList} onRemove={removeTodo} onCheck={checkTodo} />
      <TodoInput onAdd={addTodo} />
    </div>
  );
};

export default TodoTemplate;
