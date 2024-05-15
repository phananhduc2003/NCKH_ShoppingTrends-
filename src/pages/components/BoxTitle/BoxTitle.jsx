import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './BoxTitle.module.scss';
const cx = classNames.bind(styles);

function BoxTitle({ title, data }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>{title}</span>
            <span className={cx('data')}>{data}</span>
        </div>
    );
}

BoxTitle.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
};

export default BoxTitle;
