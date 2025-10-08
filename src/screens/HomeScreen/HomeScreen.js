import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './HomeScreen.scss';

const HomeScreen = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState('');   
    const [error, setError] = useState('');

    const onInputChange = (e) => {
        setCode(e.target.value);
    }

    const onSubmit = () => {
        const code2 = code.trim().toLowerCase();
        
        // TEMP
        if(code2 === 'guestappt') {
            window.location.href = 'guestappt/';
            // alert('code is correct'); 
        } else if(code2 === '') {
            setError('Please enter a code');
        } else {
            setError('The demo code is invalid');
        }
    }



    return (
        <div id="login-screen" className="is-inverse">

            
            <div className="lds-loginform is-rel is-debug222 is-abs-all" >



                <input type="text" name="code" className="is-sprite is-text-white is-debug222"  style={{top: 146, left: 10, width: 300, }} value={code} onChange={onInputChange} />   

                {error && <p className="is-text-white is-debug222 is-abs" style={{top: 180, left: 0, width: 300, fontSize: 14, }}>{error}</p>}

                <button className="is-sprite is-debug22" onClick={onSubmit} style={{top: 210, height: 54, width: '100%', }}></button>


                {/* <div className="is-sprite is-debug222 is-text-white2222" style={{top: 272, left: 0, width: 320, textAlign: 'center', color: '#fff', }}>asdfsdf</div> */}

            </div>
            
        </div>
    );
};

export default HomeScreen;