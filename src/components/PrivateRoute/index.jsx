import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
