import data from '../../../../data/Customer ID.json';

import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './TotalCustomer.module.scss';
const cx = classNames.bind(styles);

function TotalCustomer() {
    const [jsonCustomer, setJsonCustomer] = useState([]);
    useEffect(() => {
        setJsonCustomer(data);
    }, []);

    const totalCustomer = jsonCustomer.length;

    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Total Customers</span>
            <div className={cx('box')}>
                <div className={cx('value')}>{totalCustomer}</div>
            </div>
        </div>
    );
}

export default TotalCustomer;
