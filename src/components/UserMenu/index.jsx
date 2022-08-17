import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail, getIsLoading } from 'redux/selectors';
import { logOutUser } from 'redux/operations';
import { Button, IconButton, Typography, LinearProgress } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
    const userName = useSelector(getUserEmail);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const handleBtnClick = () => {
        dispatch(logOutUser());
    };

    const isDeviceMobile = window.innerWidth <= 600;

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Welcome, {userName}</Typography>

            {isLoading && (
                <LinearProgress
                    color="secondary"
                    sx={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        zIndex: 1300,
                        width: '100%',
                    }}
                />
            )}

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
