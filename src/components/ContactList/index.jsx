import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactListItem from 'components/ContactListItem';
import { fetchContacts } from 'redux/operations';
import { getFilteredContacts, contactsIsEmpty } from 'redux/selectors';
import { Stack, Paper, Alert } from '@mui/material';

const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const contactsListEmpty = useSelector(contactsIsEmpty);
    const filteredContacts = useSelector(getFilteredContacts);

    if (contactsListEmpty) {
        return (
            <Alert variant="outlined" severity="info">
                Contacts list is empty
            </Alert>
        );
    }
    if (!contactsListEmpty && filteredContacts.length === 0) {
        return (
            <Alert variant="outlined" severity="warning">
                No contact with such name found
            </Alert>
        );
    }

    return (
        <Paper
            elevation={6}
            sx={{
                padding: '16px',
                backgroundImage: `linear-gradient(270deg,
        rgba(238, 174, 202, 0.4) 0%,
        rgba(148, 187, 233, 0.6) 100%), url(${process.env.PUBLIC_URL}/paper.webp)`,
            }}
        >
            <Stack spacing={2}>
                {filteredContacts.map(({ id, name, number }) => (
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                    />
                ))}
            </Stack>
        </Paper>
    );
};

export default ContactList;
