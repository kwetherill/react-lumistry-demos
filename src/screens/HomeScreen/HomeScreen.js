import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AltInput } from '../../components';
import { useAuth } from '../../contexts/AuthContext';
import demoData from '../../data/demoData.js';
import './HomeScreen.scss';

const HomeScreen = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState('');   
    const [error, setError] = useState('');

    const onInputChange = (e) => {
        setError('');
        setCode(e.target.value);
    }


    const onSubmit = () => {
        const code2 = code.trim().toLowerCase();
        // const demo = demos[code2];
        const demo = demoData.find(item => item.code === code2);
        

        if(demo) {
            window.location.href = demo.url;
            // alert('code is correct: ' + demo.url); 
        } else if(code2 === '') {
            setError('Please enter a code');
        } else {
            setError('The demo code is invalid');
        }
    }



    return (
        <div id="login-screen" className="is-inverse">

            <div className="is-stack is-gap-8">
                <div  style={{marginBottom: 16, }}>
                <div className="lds-logo"></div>
                <div className="lds-logo-tag">Prototype</div>

                </div>
                
                <AltInput name="code" label="Enter code" className="is-inverse" value={code} onChange={onInputChange} message={error} style={{width: 270, height: 80, }} />
                
                <button className="lds-button is-white is-size-lg" onClick={onSubmit}>Enter</button>

            </div>
            
{/*             
            <div className="lds-loginform is-rel is-debug is-abs-all" >

                <input type="text" name="code" className="is-sprite is-text-white is-debug222"  style={{top: 146, left: 10, width: 300, }} value={code} onChange={onInputChange} />   
                {error && <p className="is-text-white is-debug222 is-abs" style={{top: 180, left: 0, width: 300, fontSize: 14, }}>{error}</p>}
                <button className="is-sprite is-debug22" onClick={onSubmit} style={{top: 210, height: 54, width: '100%', }}></button>

            </div> */}
            
        </div>
    );
};

export default HomeScreen;


/*
            <div className="lds-loginform is-rel is-debug is-abs-all" >



                <input type="text" name="code" className="is-sprite is-text-white is-debug222"  style={{top: 146, left: 10, width: 300, }} value={code} onChange={onInputChange} />   

                {error && <p className="is-text-white is-debug222 is-abs" style={{top: 180, left: 0, width: 300, fontSize: 14, }}>{error}</p>}

                <button className="is-sprite is-debug22" onClick={onSubmit} style={{top: 210, height: 54, width: '100%', }}></button>



                </div>

*/