import seasonData from '../../../../data/Season.json';
import './BarSeason.module.scss';

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'chart.js/auto';
import classNames from 'classnames/bind';
import styles from './BarSeason.module.scss';
const cx = classNames.bind(styles);

defaults.maintainAspectRatio = false;

function BarSeason() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(seasonData);
    }, []);

    const seasons = jsonData.map((item) => item.Season);
    const frequencyCount = seasons.reduce((acc, season) => {
        acc[season] = (acc[season] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(frequencyCount);
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Season',
                backgroundColor: ['#345DA7', '#388AC4', '#4BB4DE', '#EFDBCB'],
                borderColor: ['#345DA7', '#388AC4', '#4BB4DE', '#EFDBCB'],
                borderWidth: 1,
                data: labels.map((label) => frequencyCount[label]),
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('span')}>Season</div>
            <div className={cx('dataCard')}>
                <Bar
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                text: 'Season Bar Chart',
                                color: '#fff',
                                align: 'center',
                            },
                            legend: {
                                labels: {
                                    color: '#fff',
                                },
                            },
                        },
                        legend: {
                            display: false,
                            position: 'right',
                        },
                        scales: {
                            y: {
                                ticks: {
                                    color: '#fff',
                                },
                            },
                            x: {
                                ticks: {
                                    color: '#fff',
                                },
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default BarSeason;
