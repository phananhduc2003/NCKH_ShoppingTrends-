import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import BarItemPurchased from './components/Bar_Item_Purchased/BarItemPurchased';
import DoughnutCategory from './components/Doughnut_Category/DoughnutCategory';
import DoughnutSize from './components/Doughnut_Size/DoughnutSize';
import BarColor from './components/Bar_Color/BarColor';
import TopCategory from './components/Top_Category/TopCategory';
import TopSize from './components/TopSize/TopSize';
import TopItem from './components/TopItemsPurchased/TopItempurchaesd';
import TotalPurchaseOfSize from './components/Total_Purchase_Size/TotalPurchaseOfSize';
const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('grid', 'wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('title')}>
                        <span className={cx('title-text')}>
                            Product Shopping <br /> Dashboard
                        </span>
                    </div>
                </div>
                <div className={cx('col', 'l-2-4')}>
                    <div className={cx('box-title')}>
                        <TopCategory />
                    </div>
                </div>
                <div className={cx('col', 'l-2-4')}>
                    <div className={cx('box-title')}>
                        <TopItem />
                    </div>
                </div>
                <div className={cx('col', 'l-2-4')}>
                    <div className={cx('box-title')}>
                        <TopSize />
                    </div>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('Pie-shipping-type')}>
                        <DoughnutCategory />
                    </div>
                </div>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('Pie-preferred-paymentMethod')}>
                        <DoughnutSize />
                    </div>
                </div>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('bar-season')}>
                        <TotalPurchaseOfSize />
                    </div>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col', 'l-12')}>
                    <div className={cx('bar-item-purchased')}>
                        <BarItemPurchased />
                    </div>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col', 'l-12')}>
                    <div className={cx('bar-color')}>
                        <BarColor />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
