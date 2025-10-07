import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Button from '../components/Button';
import './DemosScreen.scss';
import { useAuth } from '../../contexts/AuthContext';

function DemosScreen() {
    const { user, logout, loading } = useAuth();  
    const navigate = useNavigate();

    React.useEffect(() => {
        if(!user && !loading) navigate('/login');
      }, [user, loading, navigate]);

    return (
        <div className="home-screen">
            <h1>Lumistry Demos</h1>
            <p><strong>Username:</strong> {user?.username}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Role:</strong> {user?.role}</p>
            <button onClick={logout}>Logout</button>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default DemosScreen;