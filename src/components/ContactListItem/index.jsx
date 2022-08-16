import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    Link,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const onDeleteClick = () => {
        dispatch(deleteContact(id));
    };

    return (
        <Card
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(200,200,200,0.5)',
            }}
        >
            <CardContent>
                <Typography variant="button">{name}</Typography>
                <Link
                    href={`tel:${number}`}
                    underline="hover"
                    color="inherit"
                    display="block"
                >
                    {number}
                </Link>
            </CardContent>
            <CardActions>
                <IconButton aria-label="delete" onClick={onDeleteClick}>
                    <DeleteIcon fontSize="medium" />
                </IconButton>
            </CardActions>
        </Card>
    );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactListItem;
