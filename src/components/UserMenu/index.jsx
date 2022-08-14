import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/selectors';
import { logOutUser } from 'redux/operations';
import styles from './styles.module.scss';

const UserMenu = () => {
    const userName = useSelector(getUserEmail);
    const dispatch = useDispatch();
    const handleBtnClick = () => {
        console.log('click');
        dispatch(logOutUser());
    };
    return (
        <div className={styles.menu}>
            <p className={styles.message}>Welcome, {userName}</p>
            <button onClick={handleBtnClick} type="button">
                Log out
            </button>
        </div>
    );
};

export default UserMenu;
