import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/selectors';
import { logOutUser } from 'redux/operations';
import { Button, Typography } from '@mui/material';

const UserMenu = () => {
    const userName = useSelector(getUserEmail);
    const dispatch = useDispatch();
    const handleBtnClick = () => {
        dispatch(logOutUser());
    };
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ marginRight: 2 }}>Welcome, {userName}</Typography>

            <Button
                onClick={handleBtnClick}
                variant="contained"
                color="error"
                sx={{ marginLeft: 'auto' }}
            >
                Log out
            </Button>
        </div>
    );
};

export default UserMenu;
