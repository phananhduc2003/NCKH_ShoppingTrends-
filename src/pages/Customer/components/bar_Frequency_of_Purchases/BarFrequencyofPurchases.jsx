import { useEffect, useState } from 'react';
import dataFrequencyOfPurchases from '../../../../data/Frequency_of_Purchases.json';

import classNames from 'classnames/bind';
import styles from './BarFrequencyOfPurchases.module.scss';
const cx = classNames.bind(styles);

import { Bar } from 'react-chartjs-2';
import { defaults } from 'chart.js/auto';

defaults.maintainAspectRatio = false;
defaults.plugins.title.font.size = 20;

function BarFrequencyofPurchases() {
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
        // Đọc dữ liệu từ tệp JSON và cập nhật state
        setJsonData(dataFrequencyOfPurchases);
    }, []);
    const frequencyLabels = [...new Set(jsonData.map((item) => item['Frequency of Purchases']))];
    const frequencyCounts = frequencyLabels.map((label) => {
        return jsonData.filter((item) => item['Frequency of Purchases'] === label).length;
    });

    const chartData = {
        labels: frequencyLabels,
        datasets: [
            {
                label: 'Frequency of Purchases',
                backgroundColor: '#6F88FC',
                borderColor: 'rgba(0,0,0,1)',
                data: frequencyCounts,
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('span')}>Purchase of Frequency </span>
            <div className={cx('dataCard')}>
                <Bar
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                text: 'Frequency of Purchases',
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

export default BarFrequencyofPurchases;
