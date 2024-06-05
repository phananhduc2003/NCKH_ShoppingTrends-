import classNames from 'classnames/bind';
import styles from './CustomerSegment.module.scss';
import RenderTable from './components/RenderTable/RenderTable';

const cx = classNames.bind(styles);

function CustomerSegment() {
    return (
        <div className={cx('grid', 'wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col', ' l-12')}>
                    <div className={cx('test')}>
                        <RenderTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerSegment;
