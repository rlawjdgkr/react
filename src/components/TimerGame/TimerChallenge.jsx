import React, { useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {

  // 타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 시간이 다 지났는지 여부
  const [timerExpired, setTimerExpired] = useState(false);
  const handleStart = e => { 

    setTimerStarted(true);

    // 실제 시간을 실행
    setTimeout(() => {
      console.log(`${targetTime} 초가 지남!`);
      setTimerExpired(true);

    }, targetTime * 1000);
  };

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timerExpired && <p>you lost!!</p>}
      
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className=''>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
};

export default TimerChallenge;
