import data from '../../../../data/Size.json';
import { FaArrowCircleUp } from 'react-icons/fa';

import classNames from 'classnames/bind';
import styles from './TopSize.module.scss';
const cx = classNames.bind(styles);

function TopSize() {
    const sizeCount = data.reduce((acc, item) => {
        acc[item.Size] = (acc[item.Size] || 0) + 1;
        return acc;
    }, {});

    // Determine the most purchased size
    const mostPurchasedSize = Object.keys(sizeCount).reduce((a, b) => (sizeCount[a] > sizeCount[b] ? a : b));

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-title')}>
                <div className={cx('icon')}>
                    <FaArrowCircleUp />
                </div>
                <span className={cx('title')}>Top Size</span>
            </div>
            <div className={cx('box')}>
                <div className={cx('value')}>
                    {mostPurchasedSize}: {sizeCount[mostPurchasedSize]}
                </div>
            </div>
        </div>
    );
}

export default TopSize;
