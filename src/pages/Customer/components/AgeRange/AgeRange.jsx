import data from '../../../../data/Age.json';
import { useState, useEffect } from 'react';
import { FaArrowsLeftRight } from 'react-icons/fa6';

import classNames from 'classnames/bind';
import styles from './AgeRange.module.scss';
const cx = classNames.bind(styles);

function AgeRange() {
    const [jsonAge, setJsonAge] = useState([]);
    useEffect(() => {
        setJsonAge(data);
    }, []);
    const minAge = Math.min(...jsonAge.map((item) => item.Age));
    const maxAge = Math.max(...jsonAge.map((item) => item.Age));
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Age Customers</span>
            <div className={cx('box-age')}>
                <div className={cx('min-age')}>{minAge}</div>
                <div className={cx('icon')}>
                    <FaArrowsLeftRight />
                </div>
                <div className={cx('max-age')}>{maxAge}</div>
            </div>
        </div>
    );
}

export default AgeRange;
