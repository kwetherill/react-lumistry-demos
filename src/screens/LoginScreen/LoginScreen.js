import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './LoginScreen.scss';

const LoginScreen = () => {
    return (
        <div id="login-screen">
            <i className="lds-logo" />
            <i className="lds-loginform" />
            
        </div>
    );
};

export default LoginScreen;