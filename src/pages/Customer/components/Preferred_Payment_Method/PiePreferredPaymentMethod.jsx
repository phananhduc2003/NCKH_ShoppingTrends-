import paymentData from '../../../../data/Preferred_Payment_Method.json';

import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { defaults } from 'chart.js/auto';
import classNames from 'classnames/bind';
import styles from './PiePreferredPaymentMethod.module.scss';
const cx = classNames.bind(styles);

defaults.maintainAspectRatio = false;
function PiePreferredPaymentMethod() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(paymentData);
    }, []);

    const paymentMethods = jsonData.map((item) => item['Preferred Payment Method']);
    const frequencyCount = paymentMethods.reduce((acc, method) => {
        acc[method] = (acc[method] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(frequencyCount);
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Preferred Payment Method',
                backgroundColor: ['#313866', '#50409A', '#964EC2', '#FF7BBF', '#F64668', '#FE9677'],
                borderColor: ['#313866', '#50409A', '#964EC2', '#FF7BBF', '#F64668', '#FE9677'],
                borderWidth: 1,
                data: labels.map((label) => frequencyCount[label]),
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('span')}>Preferred Payment Method</span>
            <div className={cx('dataCard')}>
                <Doughnut
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                text: 'Preferred Payment Method',
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

export default PiePreferredPaymentMethod;
