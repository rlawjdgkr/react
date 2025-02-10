import React, { useRef, useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ErrorModal from '../ui/Modal/ErrorModal';

const AddUsers = ({ onAddUser }) => {
  // 입력값들을 상태관리
  // const [userValue, setUserValue] = useState({
  //   username: '',
  //   age: '',
  // });

  // useRef로 태그 기억시키기
  const usernameRef = useRef();
  const ageRef = useRef();

  // console.log(usernameRef);
  

  // 에러가 났을 때 에러의 데이터를 관리할 상태변수
  // error -> { title: '에러 제목', message: '에러의 내용' }
  const [error, setError] = useState(null);

  // const handleName = (e) => {
  //   setUserValue({
  //     ...userValue,
  //     username: e.target.value,
  //   });
  // };

  // const handleAge = (e) => {
  //   setUserValue({
  //     ...userValue,
  //     age: e.target.value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const $username = usernameRef.current;
    const $age = ageRef.current;

    const userValue = {
      username: $username.value,
      age: $age.value,
    };

    // 입력값 검증
    if (!userValue.username.trim()) {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값은 필수값입니다.'
      });
      return;
    }
    if (+userValue.age < 1) {
      setError({
        title: '유효하지 않은 나이 범위',
        message: '나이는 0이나 음수가 될 수 없습니다.',
      });
      return;
    }

    onAddUser({
      ...userValue,
      id: Math.random().toString(),
    });

    $username.value = '';
    $age.value = '';

    // setUserValue({
    //   username: '',
    //   age: '',
    // });
  };

  // 에러모달을 닫아주는 함수
  const closeModal = () => { 
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onClose={closeModal} />}
      <Card className={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>이름</label>
          <input
            id='username'
            type='text'
            // value={userValue.username}
            // onInput={handleName}
            ref={usernameRef}
          />
          <label htmlFor='age'>나이</label>
          <input
            id='age'
            type='number'
            // value={userValue.age}
            // onInput={handleAge}
            ref={ageRef}
          />
          <Button type='submit'>가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
