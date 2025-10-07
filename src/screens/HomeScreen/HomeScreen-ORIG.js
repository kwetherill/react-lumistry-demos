import React from 'react';
import { Link } from 'react-router-dom';
//import config from '../../data/config';
import { useNavigate } from 'react-router-dom';
// import Button from '../components/Button';
import { useAuth } from '../../contexts/AuthContext';
import './HomeScreen.scss';

function HomeScreen() {
    const { user, loading } = useAuth();  
    const navigate = useNavigate();

    React.useEffect(() => {
        if(!user && !loading) navigate('/login');
      }, [user, loading, navigate]);

    return (
        <div id="home-screen" className="is-inverse">
            <i className="lds-logo" />
            <div className="lds-logo-tag">Demos</div>
            <div className="hs-firstname">
                <input type="text" id="firstname" placeholder="First Name" />
                <label htmlFor="firstname">First Name</label>
            </div>
            <Link to="/demos">Go to Demos</Link>
        </div>
    );
}

export default HomeScreen;

/*
        <div id="home-screen" className="is-inverse">
            <i className="lds-logo" />
            <div className="lds-logo-tag">Demos</div>
            <div className="hs-firstname">
                <input type="text" id="firstname" placeholder="First Name" />
                <label htmlFor="firstname">First Name</label>
            </div>
            <Link to="/demos">Go to Demos</Link>
        </div>
*/