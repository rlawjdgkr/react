import React, { useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../ui/Card';
import Button from '../ui/Button';

const AddUsers = ({onAddUser}) => {
  
  // 입력값들을 상태관리

  const [userValue, setUserValue] = useState({
    username: '',
    age: ''
  });
  const handleName = e=> {
    setUserValue({
      ...userValue,
      username: e.target.value,

    })
  };
  const handleAge = e => {

      setUserValue({
        ...userValue,
        age: e.target.value,
  
      })
    };

    const handleSubmit = e => {
      e.preventDefault();
      onAddUser({
        ...userValue
        ,id: Math.random().toString()
      });
      setUserValue({
        username: '',
        age:''
      })
    }
  return (
    <Card className={styles.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">이름</label>
        <input
          id="username"
          type="text"
          value={userValue.username}
          onInput={handleName}
        />
        <label htmlFor="age">나이</label>
        <input
          id="age"
          type="number"
          value={userValue.age}
          onInput={handleAge}
        />
        <Button type="submit">가입하기</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
