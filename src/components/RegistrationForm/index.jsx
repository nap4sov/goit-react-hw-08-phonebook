import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';

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

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <label>
                        Username
                        <Field name="name" type="text" />
                        {errors.name && touched.name ? (
                            <span>{errors.name}</span>
                        ) : null}
                    </label>
                    <label>
                        Email
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? (
                            <span>{errors.email}</span>
                        ) : null}
                    </label>
                    <label>
                        Password
                        <Field name="password" type="password" />
                        {errors.password && touched.password ? (
                            <span>{errors.password}</span>
                        ) : null}
                    </label>
                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
