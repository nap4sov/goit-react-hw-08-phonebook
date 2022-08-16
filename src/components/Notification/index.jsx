import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Notification = ({ title }) => (
    <Typography color="error" variant="button">
        {title}
    </Typography>
);

Notification.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Notification;
