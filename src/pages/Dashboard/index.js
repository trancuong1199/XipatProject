import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    LineElement,
    BarElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from 'chart.js';

import styles from './Dashboard.module.scss';
import Dropdown from '~/components/Dropdown';
import constants from '~/constants';
import dummyData from '~/utils/dummyData';

const cx = classNames.bind(styles);

ChartJS.register(Title, Tooltip, LineElement, BarElement, Legend, CategoryScale, LinearScale, PointElement, Filler);

function Dashboard() {
    const [chart, setChart] = useState('Last 7 days');
    const dataFilter = ['Last 7 days', 'Last 30 days', 'Last 90 days'];
    const [data, setData] = useState(dummyData.dashboard0);
    const [dataBar, setDataBar] = useState(dummyData.dashboard3);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (chart === 'Last 30 days') {
                    setData(dummyData.dashboard1);
                    setDataBar(dummyData.dashboard4);
                } else if (chart === 'Last 90 days') {
                    setData(dummyData.dashboard2);
                    setDataBar(dummyData.dashboard5);
                } else {
                    setData(dummyData.dashboard0);
                    setDataBar(dummyData.dashboard3);
                }
                await new Promise((resolve) => setTimeout(resolve, 1500));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [chart]);

    return (
        <div>
            <div className={cx('title')}>
                <h3>{constants.strings.TITLE.dashBoardNumber}</h3>
            </div>
            <div className={cx('chart--top__filter')}>
                <Dropdown selected={chart} setSelected={setChart} options={dataFilter} small />
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('main-left')}>
                    <div className={cx('main-left__chart')}>
                        <div className={cx('main-left__chart--top')}>
                            <div className={cx('main-left__chart--bottom')}>
                                <p>{constants.strings.TITLE.subscription}</p>
                                <h3>{dataBar.numberCreated}</h3>
                            </div>
                        </div>

                        <div className={cx('main-left__chart--bottom')}>
                            <Line data={data} options={dummyData.options}></Line>
                        </div>
                    </div>
                </div>

                <div className={cx('main-right')}>
                    <div className={cx('main-left__chart--top')}>
                        <div className={cx('main-left__chart--bottom')}>
                            <p>{constants.strings.TITLE.revenue}</p>
                            <h3>{dataBar.numberUsed}</h3>
                        </div>
                    </div>
                    <div className={cx('main-right__chart--bottom')}>
                        <Bar data={dataBar} options={dummyData.options}></Bar>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
