import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';
import { Button, TextField, CircularProgress } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    const handleSubmit = (userData, { setSubmitting, resetForm }) => {
        dispatch(logInUser(userData));
        setSubmitting(false);
        resetForm();
    };
    const LoginSchema = Yup.object().shape({
        password: Yup.string()
            .min(7, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    const formik = useFormik({
        initialValues: { email: '', password: '' },
        onSubmit: handleSubmit,
        validationSchema: LoginSchema,
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

            <Button
                variant="contained"
                type="submit"
                startIcon={
                    isLoading ? (
                        <CircularProgress size={20} sx={{ color: 'white' }} />
                    ) : (
                        <LoginIcon />
                    )
                }
            >
                Log in
            </Button>
        </form>
    );
};

export default LoginForm;
