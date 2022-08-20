import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from 'redux/operations';
import ContactEditMenu from 'components/ContactEditMenu';
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
import EditIcon from '@mui/icons-material/Edit';

import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);

    const onEditClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const onDeleteClick = () => {
        dispatch(deleteContact(id));
    };

    return (
        <Card>
            <CardHeader avatar={<Avatar>{name[0]}</Avatar>} />

            <CardContent>
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

                <ContactEditMenu
                    name={name}
                    number={number}
                    id={id}
                    anchor={anchorEl}
                    setAnchor={setAnchorEl}
                />
            </CardContent>
            <CardActions>
                <IconButton
                    aria-label="edit"
                    id="basic-button"
                    onClick={onEditClick}
                    aria-haspopup="true"
                >
                    <EditIcon fontSize="medium" />
                </IconButton>
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
