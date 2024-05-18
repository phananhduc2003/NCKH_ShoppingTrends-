import data from '../../../../data/Category.json';
import { IoMdTrendingUp } from 'react-icons/io';

import classNames from 'classnames/bind';
import styles from './TopCategory.module.scss';
const cx = classNames.bind(styles);

function TopCategory() {
    const categoryCount = data.reduce((acc, item) => {
        acc[item.Category] = (acc[item.Category] || 0) + 1;
        return acc;
    }, {});

    const mostPurchasedCategory = Object.keys(categoryCount).reduce((a, b) =>
        categoryCount[a] > categoryCount[b] ? a : b,
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-title')}>
                <div className={cx('icon')}>
                    <IoMdTrendingUp />
                </div>
                <span className={cx('title')}>Top Category</span>
            </div>
            <div className={cx('box')}>
                <div className={cx('value')}>{mostPurchasedCategory}</div>
            </div>
        </div>
    );
}

export default TopCategory;
