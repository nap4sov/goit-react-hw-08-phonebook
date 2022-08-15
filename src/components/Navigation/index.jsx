import UserMenu from 'components/UserMenu';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { AppBar, Button } from '@mui/material';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const location = useLocation();

    return (
        <AppBar
            position="static"
            color={isLoggedIn ? 'secondary' : 'primary'}
            sx={{ padding: 2 }}
        >
            {isLoggedIn ? (
                <UserMenu />
            ) : (
                <nav>
                    <Button
                        component={NavLink}
                        to="/login"
                        sx={{
                            marginRight: 2,
                            color: 'white',
                            border:
                                location.pathname === '/login'
                                    ? '1px solid white'
                                    : 'inherit',
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        component={NavLink}
                        to="/register"
                        sx={{
                            color: 'white',
                            border:
                                location.pathname === '/register'
                                    ? '1px solid white'
                                    : 'inherit',
                        }}
                    >
                        Register
                    </Button>
                </nav>
            )}
        </AppBar>
    );
};
export default Navigation;
