import data from '../../../../data/gender_data.json';
import { FaMale, FaFemale } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './PercentGender.module.scss';
const cx = classNames.bind(styles);

import { defaults } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
defaults.maintainAspectRatio = false;

function PercentGender() {
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
        setJsonData(data);
    }, []);
    const countMale = jsonData.filter((item) => item.Gender === 'Male').length;
    const countFemale = jsonData.filter((item) => item.Gender === 'Female').length;

    const total = data.length;
    const percentMale = (countMale / total) * 100;
    const percentFemale = (countFemale / total) * 100;

    const doughnutData = {
        labels: ['Male', 'Female'],
        datasets: [
            {
                data: [percentMale, percentFemale],
                backgroundColor: ['#6F88FC', '#fff'], // Màu sắc cho phần đầy
            },
        ],
    };

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
                <div className={cx('title-percent-gender')}>
                    <div className={cx('wrapper-icon')}>
                        <div className={cx('icon-male')}>
                            <FaMale />
                        </div>
                    </div>
                    <div className={cx('wrapper-text')}>
                        <span className={cx('text-gender')}>Male: </span>
                        <span className={cx('text-percent')}>{percentMale}%</span>
                    </div>
                </div>
                <div className={cx('title-percent-gender')}>
                    <div className={cx('wrapper-icon')}>
                        <div className={cx('icon-female')}>
                            <FaFemale />
                        </div>
                    </div>
                    <div className={cx('wrapper-text')}>
                        <span className={cx('text-gender')}>Female: </span>
                        <span className={cx('text-percent')}>{percentFemale}%</span>
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

export default PercentGender;
