import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import PrivateRoute from './PrivateRoute';
import LoadingStrip from './LoadingStrip';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/operations';
import { setError } from 'redux/actions';
import {
    getIsFetchingCurrentUser,
    getErrorMessage,
    getUserToken,
    getIsLoggedIn,
} from 'redux/selectors';
import { Skeleton, Snackbar, Alert } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import theme from 'themes/theme';

const LoginForm = lazy(() => import('./LoginForm'));
const RegistrationForm = lazy(() => import('./RegistrationForm'));
const PhonebookView = lazy(() => import('../views/PhonebookView'));

export function App() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn);
    const userHasToken = useSelector(getUserToken);
    const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
    const errorMessage = useSelector(getErrorMessage);

    useEffect(() => {
        if (!userHasToken) {
            return;
        }
        dispatch(fetchCurrentUser());
    }, [dispatch, userHasToken]);

    return (
        <ThemeProvider theme={theme}>
            {isFetchingCurrentUser ? (
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    sx={{ height: '68.5px' }}
                />
            ) : (
                <Navigation />
            )}
            <section>
                <Suspense fallback={<LoadingStrip />}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/register" />} />
                        <Route
                            path="/contacts"
                            element={
                                <PrivateRoute>
                                    <PhonebookView />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                isLoggedIn ? (
                                    <Navigate to="/contacts" />
                                ) : (
                                    <LoginForm />
                                )
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                isLoggedIn ? (
                                    <Navigate to="/contacts" />
                                ) : (
                                    <RegistrationForm />
                                )
                            }
                        />
                    </Routes>
                </Suspense>
            </section>
            <Snackbar
                open={Boolean(errorMessage)}
                autoHideDuration={5000}
                onClose={() => dispatch(setError(null))}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity="error" elevation={6}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}
