import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/selectors';
import { logOutUser } from 'redux/operations';
import { Button, IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
    const userName = useSelector(getUserEmail);
    const dispatch = useDispatch();
    const handleBtnClick = () => {
        dispatch(logOutUser());
    };

    const isDeviceMobile = window.innerWidth <= 600;

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Welcome, {userName}</Typography>

            {isDeviceMobile ? (
                <IconButton
                    onClick={handleBtnClick}
                    sx={{ marginLeft: 'auto', color: 'white' }}
                >
                    <LogoutIcon />
                </IconButton>
            ) : (
                <Button
                    onClick={handleBtnClick}
                    endIcon={<LogoutIcon />}
                    variant="contained"
                    color="error"
                    sx={{ marginLeft: 'auto' }}
                >
                    Log out
                </Button>
            )}
        </div>
    );
};

export default UserMenu;
