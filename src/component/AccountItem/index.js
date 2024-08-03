import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/047e3d0a4143478ca227b3686ef67a7f.jpeg?lk3s=a5d48078&nonce=81829&refresh_token=b8eb58c1a866d11279186898cc328cdd&x-expires=1722805200&x-signature=B%2FBjb1JHlcC89zwuCDANw55Fwek%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Dang Giap</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('usename')}>nguyendanggiap</span>
            </div>
        </div>
    );
}

export default AccountItem;
