import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
            display: false
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
        labels: {
            display: false
        },
        scales: {
            xAxes: {
                barThickness : 10,
                categorySpacing: 10
            },
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    },
};

const labels = ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#F4CCE2',
        }
    ],
};

export const ScheduleDetails = () => {
    return (<Bar options={options} data={data} />);
}
