import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/operations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IconButton, TextField, Menu, MenuItem, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ReactPhoneInput from 'react-phone-input-material-ui';
import 'react-phone-input-material-ui/lib/style.css';
import PropTypes from 'prop-types';

const ContactEditMenu = ({ id, name, number, anchor, setAnchor }) => {
    const dispatch = useDispatch();

    const open = Boolean(anchor);
    const handleSubmit = (contact, { setSubmitting }) => {
        dispatch(updateContact({ id, contact }));
        setSubmitting(false);
        setAnchor(null);
    };

    const ContactSchema = Yup.object().shape({
        name: Yup.string()
            .matches(
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                'Name may contain only letters, apostrophe, dash and spaces. ',
            )
            .required('Required'),
        number: Yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues: { name, number },
        onSubmit: handleSubmit,
        validationSchema: ContactSchema,
    });

    const onValueChange = phoneNumber => {
        formik.setFieldValue('number', phoneNumber);

        if (formik.handleChange !== null) {
            formik.handleChange(phoneNumber);
        }
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return (
        <Menu
            open={open}
            anchorEl={anchor}
            id="basic-menu"
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem>
                <TextField
                    name="name"
                    type="text"
                    label="Name"
                    variant="standard"
                    formik={formik}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
            </MenuItem>
            <MenuItem>
                <ReactPhoneInput
                    style={{ width: '100%' }}
                    name="number"
                    type="tel"
                    label="Phone"
                    country="ua"
                    value={formik.values.number}
                    onChange={onValueChange}
                    component={TextField}
                    error={
                        formik.touched.number && Boolean(formik.errors.number)
                    }
                    helperText={formik.touched.number && formik.errors.number}
                    inputProps={{
                        variant: 'standard',
                        fullWidth: true,
                    }}
                />
            </MenuItem>

            <Box display="flex" justifyContent="space-evenly">
                <IconButton
                    color="success"
                    type="submit"
                    onClick={formik.handleSubmit}
                >
                    <CheckIcon fontSize="medium" />
                </IconButton>
                <IconButton color="error" onClick={handleClose}>
                    <ClearIcon fontSize="medium" />
                </IconButton>
            </Box>
        </Menu>
    );
};

ContactEditMenu.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    setAnchor: PropTypes.func.isRequired,
};

export default ContactEditMenu;
