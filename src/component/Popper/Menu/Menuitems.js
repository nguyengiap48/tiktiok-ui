import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
