import React from 'react';
import Card from '../Card';
import Button from '../Button';
import styles from './ErrorModal.module.css';

// portal을 사용하기 위한 
import ReactDOM from 'react-dom';

// 백드롭 컴포넌트
const BackDrop = ({ onClose }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onClose}></div>
  );
};

// 모달 컴포넌트
const ModalContent = ({ title, message, onClose }) => { 
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={onClose} />,
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <ModalContent
          title={title}
          message={message}
          onClose={onClose}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
