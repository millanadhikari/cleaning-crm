import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [
    {
      label: '# of Bookings',
      data: [12, 19, 3, 5, 2, 3],

      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  maintainAspectRatio:false
};

const SalesChart = () => (
  <div className="max-h-[13rem] max-w-[28rem] min-w-[12rem] ml-4">
    <div className=''>
      <h1 className='font-semibold'>Sales Performance</h1>
      <div className='links'>
        <a
          className='text-sm text-gray-500'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/SalesChart.js'
        >
         Weekly based performance.
        </a>
      </div>
    </div>
    <Bar data={data} options={options} />
  </div>
);

export default SalesChart;