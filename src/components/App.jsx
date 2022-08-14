import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import PhonebookView from './views/PhonebookView';
import LoginView from './views/LoginView';
import RegistrationView from './views/RegistrationView';
import HomeView from './views/HomeView';

export function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/contacts" element={<PhonebookView />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/register" element={<RegistrationView />} />
            </Routes>
        </>
    );
}
