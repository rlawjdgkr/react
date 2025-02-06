import React from 'react';
import './Card.css';

const Card = ({ children, className}) => {
  
  const cn = `card ${className}`;
  return (
    <div className={cn}>
      {/* 유동적인 구조인 경우 */}
      {children}
    </div>
  );
};

export default Card;
