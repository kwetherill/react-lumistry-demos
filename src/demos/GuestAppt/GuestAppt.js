import React, { useState } from 'react';
import { Wrapper, RadioButton, GuestApptHeader, ButtonGroup } from './components';
import './GuestAppt.scss';




// steps

function Step_Camera(props) {
    const {onNext, onBack } = props;
    return (

        <div class="lds-phonelayout" id="guestappt-camera" onClick={onNext}>


        

        </div>
    );
}

    

function Step_Stores(props) {
    const {onNext, onBack, data, setData, setDataValue } = props;
    const [value, setValue] = useState(data?.store || false);

    // React.useEffect(() => {
    //     setValue(data?.store || false);
    // }, []);



    const onNext2 = () => {
        if(!value) return;
        setData({ store: value });
        // setDataValue('store', value);
        onNext();
        // alert('value: ' + value);
        // setValue('store', value);
        // onNext();
    }

    // const setValue2 = (value) => {
    //     alert('value222: ' + value);
    // }


    return (
        <Wrapper title="Find a store">


            <div class="lds-spritesplit" id="guestappt-stores">
                <div class="lds-spritesplit-left is-rel is-abs-all">


                    <RadioButton onClick={() => setValue('1')} value="1" selected={value === '1'} name="radiogroup" style={{top: 113, left: 20, height: 60, width: '100%', }} />
                    <RadioButton onClick={() => setValue('2')} value="2" selected={value === '2'} name="radiogroup" style={{top: 196, left: 20, height: 60, width: '100%', }}  />
                    <RadioButton onClick={() => setValue('3')} value="3" selected={value === '3'} name="radiogroup" style={{top: 279, left: 20, height: 60, width: '100%', }}  />
                    <RadioButton onClick={() => setValue('4')} value="4" selected={value === '4'} name="radiogroup" style={{top: 363, left: 20, height: 60, width: '100%', }}  />
                    <RadioButton onClick={() => setValue('5')} value="5" selected={value === '5'} name="radiogroup" style={{top: 449, left: 20, height: 60, width: '100%', }}  />


                </div>
                <div class="lds-spritesplit-right"></div>
            </div>

            <ButtonGroup onNext={onNext2} onBack={onBack} />

        </Wrapper>
    );
}
function Step_Services(props) {
    const {onNext, onBack, data, setDataValue, setData } = props;
    const [value, setValue] = useState(data?.service || false);

    // React.useEffect(() => {
    //     //setValue(data?.service || false);
    //     if(data.service) alert(data.service);
    // }, [data]);


    const onNext2 = () => {
        if(!value) return;
        // setData({ service: value });
        setDataValue('service', value);
        onNext();
        // alert('value: ' + value);
        // setValue('store', value);
        // onNext();
    }

    return (
        <Wrapper title="Select a service">

                <div class="lds-appsection">
            <div class="lds-spritesplit" id="guestappt-services">
                <div class="lds-spritesplit-left is-rel is-abs-all">


                    <RadioButton onClick={() => setValue('1')} value="1" selected={value === '1'} name="radiogroup" style={{top: 14, left: 16, height: 80, width: '100%', }} />
                    <RadioButton onClick={() => setValue('2')} value="2" selected={value === '2'} name="radiogroup" style={{top: 129, left: 16, height: 80, width: '100%', }}  />
                    <RadioButton onClick={() => setValue('3')} value="3" selected={value === '3'} name="radiogroup" style={{top: 242, left: 16, height: 80, width: '100%', }}  />
                    <RadioButton onClick={() => setValue('4')} value="4" selected={value === '4'} name="radiogroup" style={{top: 356, left: 16, height: 80, width: '100%', }}  />


                </div>
                <div class="lds-spritesplit-right"></div>
            </div>
            </div>


            <ButtonGroup onNext={onNext2} onBack={onBack} />
        </Wrapper>
    );
}
function Step_Signin(props) {
    const {onNext, onBack, data, setDataValue, setData } = props;  
    const [firstName, setFirstName] = useState(data?.firstName || '');
    const [lastName, setLastName] = useState(data?.lastName || '');
    const [email, setEmail] = useState(data?.email || '');
    const [dob, setDob] = useState(data?.dob || '');

    const onNext2 = () => {
        if(!firstName || !lastName || !email || !dob) return;
        setData({ firstName, lastName, email, dob });
        // setDataValue('firstName', firstName);
        // setDataValue('lastName', lastName);
        // setDataValue('email', email);
        // setDataValue('dob', dob);
        onNext();
    }

    return (
        <Wrapper title="Sign in or guest?">

        <div class="lds-appsection" id="guestappt-signin-section">
            <button className="lds-button">Sign in</button>

            <h2>Continue as guest:</h2>
            
            <div class="lds-spritesplit" id="guestappt-signin">
                <div class="lds-spritesplit-left is-rel is-abs-all">

                    <input className="is-sprite is-debug2 is-bg-white" type="text" placeholder="First name" style={{top: 4, left: 10, height: 50, width: '98%', }} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input className="is-sprite is-debug2 is-bg-white" type="text" placeholder="Last name" style={{top: 77, left: 10, height: 50, width: '98%', }} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input className="is-sprite is-debug2 is-bg-white" type="email" placeholder="Email" style={{top: 152, left: 10, height: 50, width: '98%', }} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="is-sprite is-debug2 is-bg-white" type="number" placeholder="DOB (MM/DD/YYYY)" style={{top: 226, left: 10, height: 50, width: '98%', }} value={dob} onChange={(e) => setDob(e.target.value)} />


                </div>
                <div class="lds-spritesplit-right"></div>
            </div>

            <p>By submitting your mobile number, you agree to receive calls, texts, or emails from Cameron’s Pharmacy. Text message & data rates may apply. Message frequency may vary. You can opt-out any time by replying STOP. Click <a href="#">HERE</a> to see our Privacy Policy. Call Cameron’s Pharmacy for further assistance.</p>

            <p>By tapping “Next”, you agree to this Pharmacy's<br/><a href="#">Terms of Use</a> and <a href="#">Privacy Notice</a>.</p>

            </div>


            <ButtonGroup onNext={onNext2} onBack={onBack} />
        </Wrapper>
    );
}

function Step_Date(props) {
    const {onNext, onBack, data, setDataValue } = props;
    const [date, setDate] = useState(data?.date || false);
    const setDate2 = (value) => {
        setDate(value);
    }

    const onNext2 = () => {
        if(!date) return;
        setDataValue('date', date);
        onNext();
    }

    return (
        <Wrapper title="Covid-19 Vaccination">


            <div id="guestappt-date">

                <div onClick={() => setDate2(6)} className={date === 6 ? 'is-selected' : ''} style={{top: 389, left: 200}}>6</div>  
                <div onClick={() => setDate2(11)} className={date === 11 ? 'is-selected' : ''} style={{top: 439, left: 100}}>11</div>   
                <div onClick={() => setDate2(13)} className={date === 13 ? 'is-selected' : ''} style={{top: 439, left: 200}}>13</div>  
                <div onClick={() => setDate2(17)} className={date === 17 ? 'is-selected' : ''} style={{top: 489, left: 50}}>17</div>   
                <div onClick={() => setDate2(19)} className={date === 19 ? 'is-selected' : ''} style={{top: 489, left: 150}}>19</div>     
                <div onClick={() => setDate2(21)} className={date === 21 ? 'is-selected' : ''} style={{top: 489, left: 250}}>21</div>     
                <div onClick={() => setDate2(25)} className={date === 25 ? 'is-selected' : ''} style={{top: 539, left: 100}}>25</div>   
                <div onClick={() => setDate2(26)} className={date === 26 ? 'is-selected' : ''} style={{top: 539, left: 150}}>26</div>  
            </div>

            <ButtonGroup onNext={onNext2} onBack={onBack} />
        </Wrapper>
    );
}

function Step_Time(props) {
    const {onNext, onBack, data, setDataValue } = props;
    const [time, setTime] = useState(data?.time || false);

    const setTime2 = (value) => {
        setTime(value);
    }

    const onNext2 = () => {
        if(!time) return;
        setDataValue('time', time);
        onNext();
    }
    return (
        <Wrapper title="Select a time">
            <div className="lds-appsection" id="guestappt-time">

                <h2>Friday April 07</h2>
                <p>Central Time</p>

                <div class="is-stack is-gap-8">
                    <button onClick={() => setTime2('10:00 AM')} className={time === '10:00 AM' ? 'lds-button is-selected' : 'lds-button'}>10:00 AM</button>
                    <button onClick={() => setTime2('10:30 AM')} className={time === '10:30 AM' ? 'lds-button is-selected' : 'lds-button'}>10:30 AM</button>
                    <button onClick={() => setTime2('11:00 AM')} className={time === '11:00 AM' ? 'lds-button is-selected' : 'lds-button'}>11:00 AM</button>
                    <button onClick={() => setTime2('11:30 AM')} className={time === '11:30 AM' ? 'lds-button is-selected' : 'lds-button'}>11:30 AM</button>
                    <button onClick={() => setTime2('12:00 PM')} className={time === '12:00 PM' ? 'lds-button is-selected' : 'lds-button'}>12:00 PM</button>
                    <button onClick={() => setTime2('12:30 PM')} className={time === '12:30 PM' ? 'lds-button is-selected' : 'lds-button'}>12:30 PM</button>
                    <button onClick={() => setTime2('1:00 PM')} className={time === '1:00 PM' ? 'lds-button is-selected' : 'lds-button'}>1:00 PM</button>
                    <button onClick={() => setTime2('1:30 PM')} className={time === '1:30 PM' ? 'lds-button is-selected' : 'lds-button'}>1:30 PM</button>
                </div>
                
            </div>
            <ButtonGroup onNext={onNext2} onBack={onBack} />
        </Wrapper>
    );
}

function Step_Confirm(props) {
    const {onNext, onBack, data, setDataValue } = props;
    const onClick = () => {
        window.location.href = '?';
    }
    return (
        <Wrapper title="Covid-19 Vaccination">
            <div id="guestappt-confirm" onClick={onClick}></div>
        </Wrapper>
    );
}

    



function GuestAppt() {
    const [data, setData] = useState({});
    const [Page, setPage] = useState(null);
    const [step, setStep] = useState(0);
    const pages = [
        Step_Camera,
        Step_Services,
        Step_Stores, 
        Step_Signin,
        Step_Date,
        Step_Time,
        Step_Confirm,
    ];

    

    const onBack = () => {
        if(pages[step - 1]) setStep(step - 1);
    }

    const onNext = () => {
        if(pages[step + 1]) setStep(step + 1);
    }

    const setDataValue = (key, value) => {
        setData({ ...data, [key]: value });
    }

    const setData2 = (obj) => {

        if(obj) setData({ ...data, ...obj });
    }

    
    React.useEffect(() => {
        const Element = pages[step];
        const onBack2 = step > 1 ? onBack : undefined;
        setPage(<Element onNext={onNext} onBack={onBack2} data={data} setDataValue={setDataValue} setData={setData2} />);
    }, [step]);


    return (
        <div id="guestappt">

            {Page}

        </div>
    );
}

export default GuestAppt;

