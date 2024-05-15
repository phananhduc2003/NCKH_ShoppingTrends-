import { useEffect, useState } from 'react';
import dataPie from '../../../../data/Size.json';

import classNames from 'classnames/bind';
import styles from './DoughnutSize.module.scss';
const cx = classNames.bind(styles);

import { Doughnut } from 'react-chartjs-2';
import { defaults } from 'chart.js/auto';

defaults.maintainAspectRatio = false;

function DoughnutSize() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(dataPie);
    }, []);

    const sizes = jsonData.map((item) => item['Size']);
    const frequencyCount = sizes.reduce((acc, size) => {
        acc[size] = (acc[size] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(frequencyCount);
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Size',
                backgroundColor: ['#355C7D', '#725A7A', '#C56C86', '#FF7582'],
                borderColor: ['#355C7D', '#725A7A', '#C56C86', '#FF7582'],
                borderWidth: 1,
                data: labels.map((label) => frequencyCount[label]),
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('span')}>Size</span>
            <div className={cx('dataCard')}>
                <Doughnut
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                text: 'Size Distribution',
                                color: '#fff',
                                align: 'center',
                            },
                            legend: {
                                labels: {
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

export default DoughnutSize;
