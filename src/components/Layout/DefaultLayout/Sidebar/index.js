import { TbLayoutDashboard } from 'react-icons/tb';
import { RiSettings2Fill, RiProductHuntFill } from 'react-icons/ri';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import constants from '~/constants';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <NavLink className={cx('logo')} to="/">
                    <img
                        src="https://img.freepik.com/premium-vector/abstract-colorful-logo-design_650075-1506.jpg"
                        alt="Alta Media"
                    />
                </NavLink>
                <div className={cx('menu')}>
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? '#fff2e7' : '',
                                color: isActive ? '#ff9138' : '',
                            };
                        }}
                        activeClassName="active"
                        className={cx('menu-children')}
                        to="/"
                    >
                        <TbLayoutDashboard className={cx('menu-icon')} />
                        {constants.strings.TITLE.dashBoard}
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? '#fff2e7' : '',
                                color: isActive ? '#ff9138' : '',
                            };
                        }}
                        activeClassName="active"
                        className={cx('menu-children')}
                        to="/listProducts"
                    >
                        <RiProductHuntFill className={cx('menu-icon')} />
                        {constants.strings.TITLE.product}
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? '#fff2e7' : '',
                                color: isActive ? '#ff9138' : '',
                            };
                        }}
                        activeClassName="active"
                        className={cx('menu-children')}
                        to="/setting"
                    >
                        <RiSettings2Fill className={cx('menu-icon')} />
                        {constants.strings.TITLE.setting}
                    </NavLink>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
