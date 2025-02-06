import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  /*
    dataPoints배열에는 각 월별 지출총액이 집계되어있는 상태
    여기서 월별 비율을 구해야하는가? X -> 연도 지출총액 + 해당월 지출액만 전송
    각 ChartBar가 자신의 월에 해당하는 비율을 구하도록 함
  */
  // function calcTotal() {
  //   let total = 0;
  //   for (const dp of dataPoints) {
  //     total += dp.value;
  //   }
  //   return total;
  // }

  const totalVal = dataPoints.reduce((accum, dp) => accum + dp.value, 0);

  return (
    <div className='chart'>
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          currentMonthValue={dp.value}
          totalValue={totalVal}
        />
      ))}
    </div>
  );
};

export default Chart;
