import UserMenu from 'components/UserMenu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import styles from './styles.module.scss';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <header className={styles.header}>
            {isLoggedIn ? (
                <UserMenu />
            ) : (
                <nav>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            styles.link +
                            (isActive ? ` ${styles.activeLink}` : '')
                        }
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            styles.link +
                            (isActive ? ` ${styles.activeLink}` : '')
                        }
                    >
                        Register
                    </NavLink>
                </nav>
            )}
        </header>
    );
};
export default Navigation;
