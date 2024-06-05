import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '../../../config';
import LogoWhite from '../../../assets/images/logo_white.svg';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <div className={cx('sidebar-top')}>
                    <div className={cx('sidebar-brand')}>
                        <img src={LogoWhite} alt="" />
                        <span className={cx('sidebar-brand-text')}>tabernam</span>
                    </div>
                </div>
                <MenuItem title="Product" to={config.routes.home} />
                <MenuItem title="Customer" to={config.routes.page1} />
                <MenuItem title="Customer Segment" to={config.routes.page3} />
                <MenuItem title="Predict" to={config.routes.page2} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
