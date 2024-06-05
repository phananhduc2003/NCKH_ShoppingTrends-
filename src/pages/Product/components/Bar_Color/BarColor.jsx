import { useEffect, useState } from 'react';
import dataColors from '../../../../data/Color.json';

import classNames from 'classnames/bind';
import styles from './BarColor.module.scss';
const cx = classNames.bind(styles);

import { Bar } from 'react-chartjs-2';
import { defaults } from 'chart.js/auto';

defaults.maintainAspectRatio = false;
defaults.plugins.title.font.size = 20;

function BarColor() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(dataColors);
    }, []);

    const colors = jsonData.map((item) => item['Color']);
    const frequencyCount = colors.reduce((acc, color) => {
        acc[color] = (acc[color] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(frequencyCount);
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Color',
                backgroundColor: '#557B83',
                borderColor: 'rgba(0,0,0,1)',
                data: labels.map((label) => frequencyCount[label]),
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('span')}>Color</span>
            <div className={cx('dataCard')}>
                <Bar
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                text: 'Color Distribution',
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

export default BarColor;
