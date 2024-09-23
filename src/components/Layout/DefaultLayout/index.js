import classNames from 'classnames/bind';

import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import constants from '~/constants';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content')}>
                <div className={cx('content-header')}>
                    <h2 className={cx('content-header-title')}>{constants.strings.TITLE.infoPersonal}</h2>
                </div>
                <div className={cx('content-main')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
