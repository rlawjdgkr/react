import React from 'react';
import styles from './CourseItem.module.css';

const CourseItem = ({ item, onDelete }) => {

  const { 'goal-item': goalItem } = styles;

  const { id, text } = item;
  
  /*
   1. li태그에 클릭이벤트가 걸려야 함
   2. App.jsx에 있는 goals배열에서 클릭한 아이템을 찾아서 지워야함.
   3. 클릭한 아이템을 App.jsx가 찾게하기위해 자신의 id값을 App.jsx로 끌어올려보냄
   4. App.jsx에서는 받은 id를 기반으로 goals배열에서 해당 아이템을 제거후 상태변경을 통해 리렌더링
  */
  
  const handleDelete = e => { 
    // console.log('삭제!! ', id);
    onDelete(id);
  };

  return (
    <li
      className={goalItem}
      onClick={handleDelete}>
      {text}
    </li>
  );
};

export default CourseItem;
