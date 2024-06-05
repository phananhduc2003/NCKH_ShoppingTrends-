import data from '../../../../data/Item_Purchased.json';
import { IoBarChartOutline } from 'react-icons/io5';
import classNames from 'classnames/bind';
import styles from './TopItemPurchased.module.scss';
const cx = classNames.bind(styles);

function TopItem() {
    // Count the occurrences of each item purchased
    const itemCount = data.reduce((acc, item) => {
        acc[item['Item Purchased']] = (acc[item['Item Purchased']] || 0) + 1;
        return acc;
    }, {});

    // Determine the most purchased item
    const mostPurchasedItem = Object.keys(itemCount).reduce((a, b) => (itemCount[a] > itemCount[b] ? a : b));

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-title')}>
                <div className={cx('icon')}>
                    <IoBarChartOutline />
                </div>
                <span className={cx('title')}>Top Item</span>
            </div>
            <div className={cx('box')}>
                <div className={cx('value')}>{mostPurchasedItem}</div>
            </div>
        </div>
    );
}

export default TopItem;
