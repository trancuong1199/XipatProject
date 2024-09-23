const dashboard0 = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
        {
            label: 'Dataset',
            data: [2200, 4000, 4300, 4000, 3300, 3900, 3700, 4100, 3800, 4100, 4221, 3800],
            borderColor: '#f7784c',
            backgroundColor: ['#fff3e7'],
            tension: 0,
            fill: true,
        },
    ],
    numberCreated: 4.221,
    numberCreatedPer: 32.41,
    numberUsed: 3.721,
    numberUsedPer: 25.2,
    numberWaited: 468,
    numberWaitedPer: 59.9,
    numberCancled: 32,
    numberCancledPer: 11.1,
    day: 'Ngày 11',
};

const dashboard1 = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
        {
            label: 'Dataset',
            data: [100, 3000, 5000, 2000, 3552, 2000, 3700, 4100, 3800, 5000, 2000, 4000],
            borderColor: '#f7784c',
            backgroundColor: ['#fff3e7'],
            tension: 0,
            fill: true,
        },
    ],
    numberCreated: 2.221,
    numberCreatedPer: 30.41,
    numberUsed: 5.721,
    numberUsedPer: 40.2,
    numberWaited: 1025,
    numberWaitedPer: 11.9,
    numberCancled: 200,
    numberCancledPer: 22.1,
    day: 'Tháng 11',
};

const dashboard2 = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
        {
            label: 'Dataset',
            data: [5000, 1000, 2000, 5000, 2000, 3900, 500, 4000, 5500, 4100, 2000, 5000],
            borderColor: '#f7784c',
            backgroundColor: ['#fff3e7'],
            tension: 0,
            fill: true,
        },
    ],
    numberCreated: 1.221,
    numberCreatedPer: 80.41,
    numberUsed: 5.721,
    numberUsedPer: 50.2,
    numberWaited: 1468,
    numberWaitedPer: 25.9,
    numberCancled: 3000,
    numberCancledPer: 29.1,
    day: 'Năm 2024',
};

const dashboard3 = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
        {
            label: 'Dataset',
            data: [2200, 4000, 4300, 4000, 3300, 3900, 3700, 4100, 3800, 4100, 4221, 3800],
            borderColor: '#f7784c',
            backgroundColor: ['#f7784c'],
            tension: 0,
            fill: true,
        },
    ],
    numberCreated: 4.221,
    numberCreatedPer: 32.41,
    numberUsed: 3.721,
    numberUsedPer: 25.2,
    numberWaited: 468,
    numberWaitedPer: 59.9,
    numberCancled: 32,
    numberCancledPer: 11.1,
    day: 'Ngày 11',
};

const dashboard4 = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
        {
            label: 'Dataset',
            data: [100, 3000, 5000, 2000, 3552, 2000, 3700, 4100, 3800, 5000, 2000, 4000],
            borderColor: '#f7784c',
            backgroundColor: ['#f7784c'],
            tension: 0,
            fill: true,
        },
    ],
    numberCreated: 2.221,
    numberCreatedPer: 30.41,
    numberUsed: 5.721,
    numberUsedPer: 40.2,
    numberWaited: 1025,
    numberWaitedPer: 11.9,
    numberCancled: 200,
    numberCancledPer: 22.1,
    day: 'Tháng 11',
};

const dashboard5 = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
        {
            label: 'Dataset',
            data: [5000, 1000, 2000, 5000, 2000, 3900, 500, 4000, 5500, 4100, 2000, 5000],
            borderColor: '#f7784c',
            backgroundColor: ['#f7784c'],
            tension: 0,
            fill: true,
        },
    ],
    numberCreated: 1.221,
    numberCreatedPer: 80.41,
    numberUsed: 5.721,
    numberUsedPer: 50.2,
    numberWaited: 1468,
    numberWaitedPer: 25.9,
    numberCancled: 3000,
    numberCancledPer: 29.1,
    day: 'Năm 2024',
};

const options = {
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            min: 0,
            max: 6000,
            ticks: {
                stepSize: 1000,
            },
        },
    },
};

const dummyData = {
    dashboard0,
    dashboard1,
    dashboard2,
    dashboard3,
    dashboard4,
    dashboard5,
    options,
};

export default dummyData;
