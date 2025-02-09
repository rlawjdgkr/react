import React, { useState } from "react";
import { MdDelete, MdDone } from "react-icons/md";
import styles from "./scss/TodoItem.module.scss";

const TodoItem = ({item, onDelete}) => {
  const [click, setClick] = useState(false);

  const { text, remove, "todo-list-item": itemStyle, "check-circle": checkCircle ,active, finish} = styles;
  const { id, title ,done} = item;

  // 삭제 처리 이벤트
  const handleDelete = e => {
    // console.log('삭제버튼 클릭! id: ',id );
    onDelete(id);
    
  }
  return (
    <li className={itemStyle}>
      <div
        className={`${checkCircle} ${click ? active : ""}`} 
        onClick={() => setClick(!click)}
      >
        {click && <MdDone />} {

        }
      </div>
      <span className={`${text} ${click ? finish : ''} `}>{title}</span>
      <div className={remove} onClick={handleDelete}>
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
