import { useState } from 'react';

import diamondCustomers from '../../../../data/diamond.json';
import goldCustomers from '../../../../data/gold.json';
import silverCustomers from '../../../../data/silver.json';
import bronzeCustomers from '../../../../data/bronze.json';
import 'bootstrap/dist/css/bootstrap.css';

import classNames from 'classnames/bind';
import styles from './RenderTable.module.scss';
const cx = classNames.bind(styles);

function RenderTable() {
    const [customers, setCustomers] = useState(diamondCustomers);
    const [currentCategory, setCurrentCategory] = useState('Diamond Customers');

    const handleButtonClick = (category, customers) => {
        setCustomers(customers);
        setCurrentCategory(category);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('button')}>
                <button
                    className={cx('btn m-2', 'button-color')}
                    onClick={() => handleButtonClick('Diamond Customers', diamondCustomers)}
                >
                    Diamond Customers
                </button>
                <button
                    className={cx('btn m-2', 'button-color')}
                    onClick={() => handleButtonClick('Gold Customers', goldCustomers)}
                >
                    Gold Customers
                </button>
                <button
                    className={cx('btn m-2', 'button-color')}
                    onClick={() => handleButtonClick('Silver Customers', silverCustomers)}
                >
                    Silver Customers
                </button>
                <button
                    className={cx('btn m-2', 'button-color')}
                    onClick={() => handleButtonClick('Bronze Customers', bronzeCustomers)}
                >
                    Bronze Customers
                </button>
            </div>

            <div className={cx('title')}>Table {currentCategory}</div>

            <div className={cx('table-responsive-sm', 'wrapper-table')}>
                <table className={cx('table table-borderless table-hover table-sm', 'custom-table')}>
                    <thead>
                        <tr>
                            <th className={cx('scope="col"', 'title-table')}>Customer ID</th>
                            <th className={cx('scope="col"', 'title-table')}>Age</th>
                            <th className={cx('scope="col"', 'title-table')}>Gender</th>
                            <th className={cx('scope="col"', 'title-table')}>Location</th>
                            <th className={cx('scope="col"', 'title-table')}>Subscription Status</th>
                            <th className={cx('scope="col"', 'title-table')}>Previous Purchases</th>
                            <th className={cx('scope="col"', 'title-table')}>Preferred Payment Method</th>
                            <th className={cx('scope="col"', 'title-table')}>Frequency of Purchases</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td className={cx('style-result')}>{customer['Customer ID']}</td>
                                <td className={cx('style-result')}>{customer.Age}</td>
                                <td className={cx('style-result')}>{customer.Gender}</td>
                                <td className={cx('style-result')}>{customer.Location}</td>
                                <td className={cx('style-result')}>{customer['Subscription Status']}</td>
                                <td className={cx('style-result')}>{customer['Previous Purchases']}</td>
                                <td className={cx('style-result')}>{customer['Preferred Payment Method']}</td>
                                <td className={cx('style-result')}>{customer['Frequency of Purchases']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RenderTable;
