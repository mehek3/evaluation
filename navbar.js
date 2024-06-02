import { Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Navbar  = () => {
    const{ authState, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (
        <nav>
            { authState.isAuthenticated ? (
                <>
                <span>{authState.email}</span>
                <Link to="/">Home</Link>
                <button onClick= { handleLogout}>LOGOUT</button>
                </>
            ) : (
                <Link to="/login">LOGIN</Link>
            )}
        </nav>
    );
};
export default Navbar;