import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations';
import { Button, TextField } from '@mui/material';

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (userData, { setSubmitting, resetForm }) => {
        dispatch(logInUser(userData));
        setSubmitting(false);
        resetForm();
    };
    const formik = useFormik({
        initialValues: { email: '', password: '' },
        onSubmit: handleSubmit,
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
                name="email"
                type="email"
                label="Email"
                variant="standard"
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={{ width: '300px', marginBottom: 2 }}
            />

            <TextField
                name="password"
                type="password"
                label="Password"
                variant="standard"
                value={formik.values.password}
                onChange={formik.handleChange}
                sx={{ width: '300px', marginBottom: 3 }}
            />

            <Button variant="contained" type="submit">
                Log in
            </Button>
        </form>
    );
};

export default LoginForm;
