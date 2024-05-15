import styles from './Heading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Heading() {
    return (
        <div>
            <h2 className={cx('heading')}>Heading</h2>
        </div>
    );
}

export default Heading;
