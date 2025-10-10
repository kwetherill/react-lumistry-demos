import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { AltInput } from '../../components';
import { useAuth } from '../../contexts/AuthContext';
import demoData from '../../data/demoData.js';
import './HomeScreen.scss';





const HomeScreen = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState('');   
    const [error, setError] = useState('');
    const [localData, setLocalData] = useState(false);
    const [loading, setLoading] = useState(true);


    React.useEffect(() => {
        // Check if user is logged in on app start
        const localData2 = localStorage.getItem('localData');
        if (localData2) setLocalData(JSON.parse(localData2));
        setLoading(false);
    }, []);

    const onLogout = () => {
        setLocalData(false);
        localStorage.removeItem('localData');
    }


    const onInputChange = (e) => {
        setError('');
        setCode(e.target.value);
    }


    const onSubmit = () => {
        const code2 = code.trim().toLowerCase();
        // const demo = demos[code2];
        const demo = demoData.find(item => item.code === code2);
        

        if(demo) {
            // window.location.href = demo.url;
            const obj = {demo: demo};
            setLocalData(obj);
            localStorage.setItem('localData', JSON.stringify(obj));
            // alert('code is correct: ' + demo.url); 
        } else if(code2 === '') {
            setError('Please enter a code');
        } else {
            setError('The demo code is invalid');
        }
    }

    // loading screen
    if(loading) return <div>Loading...</div>;


    // home screen
    const css = classNames(localData?.demo?.type && `is-type-${localData.demo.type}`);
    if(localData) return (
        <div id="home-screen" className={css}>

            
            <div className="lds-logo"></div>
            <div className="lds-logo-tag is-text-white">Prototype</div>

            <div id="home-screen-content">


                <div className="is-group is-gap-8" id="home-screen-top">
                    <AltInput name="code" label="Code" className="is-width-100p" value={code} onChange={onInputChange} message={error} />
                    <button className="lds-button is-size-lg" onClick={onSubmit}>Enter</button>
                </div>

                <div className="is-text-formatted is-text-center" id="home-screen-main">
                    <h2>{localData.demo.title}</h2>
                    <p>{localData.demo.description}</p>
                    <p>Device: <b>{localData.demo.device}</b></p>
                    <div className="lds-graphic is-type-qrcode is-margin-auto"></div>
                </div>

                <div className="is-group is-gap-16" id="home-screen-buttons">
                    {localData.demo.urls?.map((url, index) => (
                        <a key={index} style={{fontSize: 24, padding: 6, }} className="lds-button is-green" href={url}>{localData.demo.type === 'test' ? `${index + 1}` : 'Start'}</a>
                    ))}
                </div>

                <button className="lds-button is-size-lg is-tertiary" onClick={onLogout}>Exit</button>

            </div>


    </div>
    );


    // login screen
    return (
        <div id="login-screen" className="is-inverse">

            <div className="is-stack is-gap-8">

                <div >
                    <div className="lds-logo"></div>
                    <div className="lds-logo-tag">Prototype</div>
                </div>
                
                <AltInput name="code" label="Enter code" className="is-inverse" value={code} onChange={onInputChange} message={error} style={{width: 270, height: 80, }} />
                
                <button className="lds-button is-white is-size-lg" onClick={onSubmit}>Enter</button>

            </div>
            

            
        </div>
    );
};

export default HomeScreen;
