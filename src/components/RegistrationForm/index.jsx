import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';
import { Button, TextField } from '@mui/material';

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (userData, { setSubmitting, resetForm }) => {
        dispatch(registerUser(userData));
        setSubmitting(false);
        resetForm();
    };
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .min(7, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .min(17, 'Too Short!')
            .email('Invalid email')
            .required('Required'),
    });

    const formik = useFormik({
        initialValues: { name: '', email: '', password: '' },
        onSubmit: handleSubmit,
        validationSchema: SignupSchema,
    });

    return (
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
                sx={{ width: '300px', marginBottom: 2 }}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
                name="email"
                type="email"
                label="Email"
                variant="standard"
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={{ width: '300px', marginBottom: 2 }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
                name="password"
                type="password"
                label="Password"
                variant="standard"
                value={formik.values.password}
                onChange={formik.handleChange}
                sx={{ width: '300px', marginBottom: 3 }}
                error={
                    formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
            />

            <Button variant="contained" type="submit">
                Register
            </Button>
        </form>
    );
};

export default RegistrationForm;
