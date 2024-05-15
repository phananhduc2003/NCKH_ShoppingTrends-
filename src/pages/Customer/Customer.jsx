import BoxTitle from '../components/BoxTitle/BoxTitle';
import BarFrequencyofPurchases from './components/bar_Frequency_of_Purchases/BarFrequencyofPurchases';
import PieShippingType from './components/Pie_Shipping_Type/PieShippingType';
import BarSeason from './components/Season/BarSeason';
import PiePreferredPaymentMethod from './components/Preferred_Payment_Method/PiePreferredPaymentMethod';

import classNames from 'classnames/bind';
import styles from './Customer.module.scss';
import AgeRange from './components/AgeRange/AgeRange';
import PercentGender from './components/Percent_Gender/PercentGender';
import Subscription from './components/Subscription_Status/Subscription';
const cx = classNames.bind(styles);

function Customer() {
    return (
        <div className={cx('grid', 'wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('title')}>
                        <span className={cx('title-text')}>
                            Customer Shopping <br /> Dashboard
                        </span>
                    </div>
                </div>
                <div className={cx('col', 'l-2-4')}>
                    <div className={cx('Age-title')}>
                        <AgeRange />
                    </div>
                </div>
                <div className={cx('col', 'l-2-4')}>
                    <div className={cx('box-title')}>
                        <BoxTitle title="Total Customers" data="99,5K" />
                    </div>
                </div>
                <div className={cx('col', 'l-2-4')}>
                    <div className={cx('box-title')}>
                        <BoxTitle title="Average Age" data="43,4" />
                    </div>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col', 'l-8')}>
                    <div className={cx('bar-frequency-of-purchases')}>
                        <BarFrequencyofPurchases />
                    </div>
                </div>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12')}>
                            <div className={cx('percent-gender')}>
                                <PercentGender />
                            </div>
                        </div>
                        <div className={cx('col', 'l-12')}>
                            <div className={cx('percent-gender')}>
                                <Subscription />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('Pie-shipping-type')}>
                        <PieShippingType />
                    </div>
                </div>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('Pie-preferred-paymentMethod')}>
                        <PiePreferredPaymentMethod />
                    </div>
                </div>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('bar-season')}>
                        <BarSeason />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customer;
