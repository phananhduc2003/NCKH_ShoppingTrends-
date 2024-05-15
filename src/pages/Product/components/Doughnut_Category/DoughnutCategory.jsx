import { useEffect, useState } from 'react';
import dataPie from '../../../../data/Category.json';

import classNames from 'classnames/bind';
import styles from './DoughnutCategory.module.scss';
const cx = classNames.bind(styles);

import { Doughnut } from 'react-chartjs-2';
import { defaults } from 'chart.js/auto';

defaults.maintainAspectRatio = false;

function DoughnutCategory() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(dataPie);
    }, []);

    const shippingTypes = jsonData.map((item) => item['Category']);
    const frequencyCount = shippingTypes.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(frequencyCount);
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Category',
                backgroundColor: ['#345DA7', '#388AC4', '#4BB4DE', '#EFDBCB'],
                borderColor: ['#345DA7', '#388AC4', '#4BB4DE', '#EFDBCB'],
                borderWidth: 1,
                data: labels.map((label) => frequencyCount[label]),
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('span')}>Category</span>
            <div className={cx('dataCard')}>
                <Doughnut
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                text: 'Category Distribution',
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

export default DoughnutCategory;
