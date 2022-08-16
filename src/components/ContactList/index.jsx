import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactListItem from 'components/ContactListItem';
import Notification from 'components/Notification';
import { fetchContacts } from 'redux/operations';
import {
    getIsLoading,
    getFilteredContacts,
    contactsIsEmpty,
    getErrorMessage,
} from 'redux/selectors';
import { Stack, Paper } from '@mui/material';

const ContactList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const isLoading = useSelector(getIsLoading);
    const contactsListEmpty = useSelector(contactsIsEmpty);
    const filteredContacts = useSelector(getFilteredContacts);
    const errorMessage = useSelector(getErrorMessage);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (errorMessage) {
        return <Notification title={errorMessage} />;
    }
    if (contactsListEmpty) {
        return <Notification title="Contacts list is empty" />;
    }
    if (!contactsListEmpty && filteredContacts.length === 0) {
        return <Notification title="No contact with such name found" />;
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
