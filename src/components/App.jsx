import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoadingStrip from './LoadingStrip';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/operations';
import { setError } from 'redux/actions';
import {
    getIsFetchingCurrentUser,
    getErrorMessage,
    getUserToken,
} from 'redux/selectors';
import { Skeleton, Snackbar, Alert } from '@mui/material';

const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegistrationView = lazy(() => import('./views/RegistrationView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));

export function App() {
    const dispatch = useDispatch();
    const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
    const errorMessage = useSelector(getErrorMessage);
    const userHasToken = useSelector(getUserToken);

    useEffect(() => {
        if (!userHasToken) {
            return;
        }
        dispatch(fetchCurrentUser());
    }, [dispatch, userHasToken]);

    return (
        <>
            {isFetchingCurrentUser ? (
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    sx={{ height: '68.5px' }}
                />
            ) : (
                <Navigation />
            )}
            <section style={{ padding: '16px' }}>
                <Suspense fallback={<LoadingStrip />}>
                    <Routes>
                        <Route path="/" element={<HomeView />} />
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
                                <PublicRoute>
                                    <LoginView />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <PublicRoute>
                                    <RegistrationView />
                                </PublicRoute>
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
        </>
    );
}
