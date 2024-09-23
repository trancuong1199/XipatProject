import { useState, useCallback } from 'react';
import classNames from 'classnames/bind';

import styles from './Validation.module.scss';

const cx = classNames.bind(styles);

function Validation(campaignTitle, price) {
    const [test, setTest] = useState(false);

    if (campaignTitle === '') {
        setTest(true);
    } else {
        setTest(false);
    }

    return (
        <>
            <div className={cx('wrapper')}>{test ? '77777' : '5555'}</div>
        </>
    );
}

export default Validation;
