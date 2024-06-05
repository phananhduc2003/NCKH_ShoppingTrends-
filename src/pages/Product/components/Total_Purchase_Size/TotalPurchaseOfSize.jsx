import purchaseData from '../../../../data/sp.json';

import classNames from 'classnames/bind';
import styles from './TotalPurchaseOfSize.module.scss';
const cx = classNames.bind(styles);

function TotalPurchaseOfSize() {
    const totalPurchases = purchaseData.reduce((acc, item) => {
        if (!acc[item.Size]) {
            acc[item.Size] = 0;
        }
        acc[item.Size] += item['Purchase Amount (USD)'];
        return acc;
    }, {});

    return (
        <div className={cx('wrapper')}>
            <div className={cx('span')}>Total Purchase of Size</div>

            <div>
                <ul className={cx('ul')}>
                    {Object.keys(totalPurchases).map((size) => (
                        <li className={cx('li')} key={size}>
                            <div>Size {size}:</div> <div>${totalPurchases[size]}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TotalPurchaseOfSize;
