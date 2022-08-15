import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomeView from './views/HomeView';
import PhonebookView from './views/PhonebookView';
import LoginView from './views/LoginView';
import RegistrationView from './views/RegistrationView';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/operations';
import { getIsFetchingCurrentUser } from 'redux/selectors';

export function App() {
    const dispatch = useDispatch();
    const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);
    return (
        !isFetchingCurrentUser && (
            <>
                <Navigation />
                <section style={{ padding: '16px' }}>
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
                </section>
            </>
        )
    );
}
