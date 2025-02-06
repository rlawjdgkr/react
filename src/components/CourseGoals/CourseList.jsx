import React from 'react';
import styles from './CourseList.module.css';
import CourseItem from './CourseItem';

const CourseList = ({ items, onDelete }) => {
  return (
    <ul className={styles['goal-list']}>
      { 
        items.map(item => <CourseItem key={item.id} item={item} onDelete={onDelete} />)
      }
    </ul>
  );
};

export default CourseList;
