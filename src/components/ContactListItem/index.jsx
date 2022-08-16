import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
    Card,
    CardContent,
    CardActions,
    CardHeader,
    Typography,
    IconButton,
    Link,
    Avatar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
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
                background: 'rgba(200,200,200,0.5)',
            }}
        >
            <CardHeader
                sx={{ paddingRight: 0 }}
                avatar={<Avatar>{name[0]}</Avatar>}
            />

            <CardContent sx={{ padding: 0 }}>
                <Typography variant="button">{name}</Typography>
                <Link
                    href={`tel:${number}`}
                    underline="hover"
                    color="text.secondary"
                    display="flex"
                    sx={{ alignItems: 'center' }}
                >
                    <PhoneIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                    {number}
                </Link>
            </CardContent>
            <CardActions sx={{ marginLeft: 'auto' }}>
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
