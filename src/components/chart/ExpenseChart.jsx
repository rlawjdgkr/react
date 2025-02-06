import React from 'react';
import Chart from './Chart';

const ExpenseChart = ({ expenses }) => {

  // console.log(expenses);

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // 필터링된 지출 배열을 통해 charDataPoints의 value들을 채우기
  expenses.forEach(ex => {
    const expenseMonth = ex.date.getMonth();
    chartDataPoints[expenseMonth].value += ex.price;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
