import { useEffect, useState } from 'react';
import dataPie from '../../../../data/Shipping_Type.json';

import classNames from 'classnames/bind';
import styles from './PieShippingType.module.scss';
const cx = classNames.bind(styles);

import { Doughnut } from 'react-chartjs-2';
import { defaults } from 'chart.js/auto';

defaults.maintainAspectRatio = false;

function PieShippingType() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(dataPie);
    }, []);

    const shippingTypes = jsonData.map((item) => item['Shipping Type']);
    const frequencyCount = shippingTypes.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(frequencyCount);
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Shipping Type',
                backgroundColor: ['#F14666', '#EE8980', '#FFCDAA', '#9CBB98', '#9A9CEA', '#A2B9EE'],
                borderColor: ['#F14666', '#EE8980', '#FFCDAA', '#9CBB98', '#9A9CEA', '#A2B9EE'],
                borderWidth: 1,
                data: labels.map((label) => frequencyCount[label]),
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('span')}>Shipping Type </span>
            <div className={cx('dataCard')}>
                <Doughnut
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                text: 'Shipping Type',
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

export default PieShippingType;
