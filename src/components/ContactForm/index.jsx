import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { setError } from 'redux/actions';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    IconButton,
    TextField,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const listContainsContact = contact => {
        return contacts.some(
            ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
        );
    };

    const handleSubmit = (contact, { setSubmitting, resetForm }) => {
        if (listContainsContact(contact)) {
            dispatch(setError(`${contact.name} is already in contacts.`));
            return;
        }
        dispatch(addContact(contact));
        setSubmitting(false);
        resetForm();
    };

    const ContactSchema = Yup.object().shape({
        name: Yup.string()
            .matches(
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            )
            .required('Required'),
        number: Yup.string()
            .matches(
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            )
            .required('Required'),
    });

    const formik = useFormik({
        initialValues: { name: '', number: '' },
        onSubmit: handleSubmit,
        validationSchema: ContactSchema,
    });

    return (
        <Accordion sx={{ background: 'transparent' }} elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ color: 'black' }}>Add new contact</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form
                    onSubmit={formik.handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <TextField
                        name="name"
                        type="text"
                        label="Name"
                        variant="standard"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        fullWidth
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        name="number"
                        type="tel"
                        label="Phone number"
                        variant="standard"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        sx={{ marginBottom: 3 }}
                        fullWidth
                        error={
                            formik.touched.number &&
                            Boolean(formik.errors.number)
                        }
                        helperText={
                            formik.touched.number && formik.errors.number
                        }
                    />
                    <IconButton
                        variant="contained"
                        type="submit"
                        aria-label="add"
                    >
                        <AddCircleIcon fontSize="large" />
                    </IconButton>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default ContactForm;
