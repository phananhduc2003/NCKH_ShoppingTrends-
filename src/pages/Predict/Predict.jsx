import classNames from 'classnames/bind';
import styles from './Predict.module.scss';
import FormPredict from './components/form_predict/FormPredict';
const cx = classNames.bind(styles);
function Predict() {
    return (
        <div className={cx('grid', 'wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col', ' l-12')}>
                    <div className={cx('test')}>
                        <FormPredict />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Predict;
