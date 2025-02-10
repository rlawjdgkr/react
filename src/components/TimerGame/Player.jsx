import React, { useRef, useState } from "react";

const Player = () => {
 
  // input태그를 저장할 ref
  const nameRef = useRef();

  const[enteredName, setEnteredName] = useState('annonymous')
  const handleChangeName = e => {
    console.log(nameRef);
    
    const $input = nameRef.current; 
    
    setEnteredName($input.value);
    $input.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredName}!</h2>
      <p>
        <input type="text" ref={nameRef} />
        <button onClick={handleChangeName}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
