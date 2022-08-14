import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations';

const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (userData, { setSubmitting, resetForm }) => {
        dispatch(logInUser(userData));
        setSubmitting(false);
        resetForm();
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
        >
            <Form>
                <label>
                    Email
                    <Field name="email" type="email" />
                </label>
                <label>
                    Password
                    <Field name="password" type="password" />
                </label>
                <button type="submit">Log in</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;
