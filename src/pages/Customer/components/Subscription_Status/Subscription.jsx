import data from '../../../../data/Subscription_Status.json';
import { AiFillHeart } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';

import classNames from 'classnames/bind';
import styles from './Subscription.module.scss';
const cx = classNames.bind(styles);

import { useState, useEffect } from 'react';
import { defaults } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
defaults.maintainAspectRatio = false;

function Subscription() {
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
        setJsonData(data);
    }, []);
    // Đếm số lượng Yes và No từ dữ liệu
    const countYes = jsonData.filter((item) => item['Subscription Status'] === 'Yes').length;
    const countNo = jsonData.filter((item) => item['Subscription Status'] === 'No').length;

    // Tính phần trăm số lượng Yes và No
    const total = jsonData.length;
    const percentYes = (countYes / total) * 100;
    const percentNo = (countNo / total) * 100;

    // Dữ liệu cho biểu đồ Doughnut
    const doughnutData = {
        labels: ['Yes', 'No'],
        datasets: [
            {
                data: [percentYes, percentNo],
                backgroundColor: ['#6F88FC', '#fff'], // Màu sắc cho phần đầy
            },
        ],
    };

    // Cấu hình của biểu đồ Doughnut
    const doughnutOptions = {
        maintainAspectRatio: false, // Chỉnh tỷ lệ khung hình
        cutoutPercentage: 70, // Phần trống giữa các dòng
        plugins: {
            legend: {
                labels: {
                    color: '#fff',
                },
            },
        },
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-title')}>
                <div className={cx('title-percent-Sub')}>
                    <div className={cx('wrapper-icon')}>
                        <div className={cx('icon-yes')}>
                            <AiFillHeart />
                        </div>
                    </div>
                    <div className={cx('wrapper-text')}>
                        <span className={cx('text-yes-no')}>Yes: </span>
                        <span className={cx('text-Sub')}>{percentYes}%</span>
                    </div>
                </div>
                <div className={cx('title-percent-Sub')}>
                    <div className={cx('wrapper-icon')}>
                        <div className={cx('icon-no')}>
                            <FaTimesCircle />
                        </div>
                    </div>
                    <div className={cx('wrapper-text')}>
                        <span className={cx('text-yes-no')}>No: </span>
                        <span className={cx('text-Sub')}>{percentNo}%</span>
                    </div>
                </div>
            </div>
            <div className={cx('box-doughnut')}>
                <div className={cx('doughnut')}>
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
            </div>
        </div>
    );
}

export default Subscription;
