import React, { useState } from 'react';
import { Wrapper, AltInput, Input } from '../../components';
// import { GuestRefillHeader } from './GuestRefill_comps';
import { GuestHeader, GuestButtonGroup } from '../../components';
import './GuestRefill.scss';

export { Step_Number, Step_Confirm, Step_Camera, Step_Signin, Step_PatientInfo, Step_Register };

// steps

function Step_Camera(props) {
    const {onNext, onBack } = props;
    return (
        <div class="lds-phonelayout is-type-camera" onClick={onNext}>

            <a href="/" className="lds-phonelayout-home"></a>

            asdfsadfsadf

        </div>
    );
}

    

function Step_Confirm(props){
    const {onNext, onBack, data, setDataValue, version } = props;
    return (
        <Wrapper title="Confirm">
            <div className="lds-appsection is-stack" id="guestrefill-confirm">
                <GuestHeader title="Refill prescription" description="Thanks for choosing Your Pharmacy!" />
            </div>


            <div className="lds-appsection is-stack" style={{gap: 24,}}>

            <div className="lds-graphic is-type-refillconfirm is-margin-auto" style={{height: 280, width: '100%', }}></div>

            {/* <GuestButtonGroup onNext={onNext} onBack={onBack} />     */}

            
            <hr />
                <div>
            <div className="is-text-formatted is-text-center">
                <h2>Register with us</h2>
                <p style={{maxWidth: 300, margin: '0 auto', }}>Please provide the patient info and your contact info in case we have questions</p>
                <ul>
                    <li>Value prop 1</li>
                    <li>Value prop 1</li>
                    <li>Value prop 1</li>
                </ul>
            </div>
            </div>
           
            <button onClick={onNext} className="lds-button is-primary is-size-lg is-width-100p">Continue</button>

            </div>
        </Wrapper>
    );
}

function Error(props){
    const {message} = props;
    return (
        <div className="lds-alert is-type-error">
            <i>&#9888;</i> {message}
        </div>
    );
}

function Step_Number(props) {
    const {onNext, onBack, data, setDataValue } = props;
    const [time, setTime] = useState(data?.time || false);
    const [error, setError] = useState(false);

    const [rxNumber, setRxNumber] = useState(data?.rxNumber || '');    
    
    const onRxNumberChange = (e) => {
        setRxNumber(e.target.value);
        setError(false);
    }

    const onNext2 = () => {
        if(!rxNumber){
            setError(true);
            return;
        }
        setDataValue('rxNumber', rxNumber);
        onNext();
    }


    // const setTime2 = (value) => {
    //     setTime(value);
    // }

    // const onNext2 = () => {
    //     if(!time) return;
    //     setDataValue('time', time);
    //     onNext();
    // }

    // return
    return (
        <Wrapper title="Select a time" showHeader={false}>
            <div className="lds-appsection is-stack" id="guestrefill-time">




            <div class="lds-graphic is-type-youtpharmacy is-margin-auto" style={{height: 200, width: 350, }}></div>

                <GuestHeader title="Welcome to Your Pharmacy!" description="Enter a prescription number" />
                

                <div>

               
                <AltInput label="Rx number" type="number" className="is-width-100p" value={rxNumber} onChange={onRxNumberChange} /> 

                {error && <p className="lds-message is-type-error"><i>&#9888;</i> Please enter a prescription number</p>}

                </div>


                {/* {error && <Error message="Please enter a prescription number" />} */}
                    
                    
                    {/* //
                <div class="lds-altinput is-width-100p"> //
                //     <input type="number" autocomplete="off" required />
                //     <label>Rx number</label>
                // </div> // */}



                {/* <div class="lds-altinput is-iconic is-width-100p">
                    <input type="text" autocomplete="off" required />
                    <label>First name</label>
                </div> */}


                {/* <input className="lds-input" placeholder="Enter prescription number" /> */}



            </div>

            <GuestButtonGroup onNext={onNext2} onBack22={onBack} />    
        </Wrapper>
    );
}




function Step_Signin(props) {
    const {onNext, onBack, data, setDataValue, setData, version } = props;  
    const [error, setError] = useState(false);
    const [firstName, setFirstName] = useState(data?.firstName || '');
    const [lastName, setLastName] = useState(data?.lastName || '');
    // const [email, setEmail] = useState(data?.email || '');
    const [phone, setPhone] = useState(data?.phone || '');
    const [dob, setDob] = useState(data?.dob || '');

    const onNext2 = () => {
        setError(false);
        if(!firstName || !lastName || !phone || !dob){
            setError(true);
            return;
        }
        setData({ firstName, lastName, phone, dob });
        onNext();
    }

    return (
        <Wrapper>
            <GuestHeader title="Book and appointment" description="Sign in or guest?" />



        <div class="lds-appsection" id="guestappt-signin-section">

            <button className="lds-button">Sign in</button>

            <h2>Continue as guest:</h2>


            
            <div class="is-stack is-gap-16">
            {error && <Error message="All of the fields are required." />}

                <AltInput label="First name" className="is-width-100p" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <AltInput label="Last name" className="is-width-100p" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <AltInput label="DOB (MM/DD/YYYY)" className="is-width-100p" value={dob} onChange={(e) => setDob(e.target.value)} />
                <AltInput label="Phone" className="is-width-100p" value={phone} onChange={(e) => setPhone(e.target.value)} />

                {/* <AltInput label="Email" className="is-width-100p" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
                
            </div>




            
            

            {/* <button onClick={onNext2} style={{marginTop: 24, }}  className="lds-button is-primary is-size-lg is-width-100p">Submit</button> */}
           

            <p>By submitting your mobile number, you agree to receive calls, texts, or emails from Cameron’s Pharmacy. Text message & data rates may apply. Message frequency may vary. You can opt-out any time by replying STOP. Click <a href="#">HERE</a> to see our Privacy Policy. Call Cameron’s Pharmacy for further assistance.</p>
            <p>By tapping “Next”, you agree to this Pharmacy's<br/><a href="#">Terms of Use</a> and <a href="#">Privacy Notice</a>.</p>



            </div>
            <GuestButtonGroup onNext={onNext2} onBack={onBack} />



        </Wrapper>
    );
}






function Step_PatientInfo(props) {
    const {onNext, onBack, data, setDataValue, setData, version } = props;  
    const [error, setError] = useState(false);
    const [firstName, setFirstName] = useState(data?.firstName || '');
    const [lastName, setLastName] = useState(data?.lastName || '');
    // const [email, setEmail] = useState(data?.email || '');
    const [phone, setPhone] = useState(data?.phone || '');
    const [dob, setDob] = useState(data?.dob || '');

    const onNext2 = () => {
        setError(false);
        if(!firstName || !lastName || !phone || !dob){
            setError(true);
            return;
        }
        setData({ firstName, lastName, phone, dob });
        onNext();
    }

    return (
        <Wrapper>

            <GuestHeader title="Refill prescription" description="Patient info" />

            <div className="is-text-formatted is-text-center"><p>Please provide the patient info and your contact info in case we have questions</p></div>



        <div class="lds-appsection" id="guestappt-signin-section">

            

            
            <div class="is-stack is-gap-16">



            {error && <Error message="All of the fields are required." />}

                <AltInput label="First name" className="is-width-100p" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <AltInput label="Last name" className="is-width-100p" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <AltInput label="DOB (MM/DD/YYYY) 222" className="is-width-100p" value={dob} onChange={(e) => setDob(e.target.value)} />
                <AltInput label="Phone" className="is-width-100p" value={phone} onChange={(e) => setPhone(e.target.value)} />

                {/* <AltInput label="Email" className="is-width-100p" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
                
            </div>




            <GuestButtonGroup onNext={onNext2} onBack={onBack} noPadding={true} />
            
            

            {/* <button onClick={onNext2} style={{marginTop: 24, }}  className="lds-button is-primary is-size-lg is-width-100p">Submit</button> */}
           

            <p>By submitting your mobile number, you agree to receive calls, texts, or emails from Cameron’s Pharmacy. Text message & data rates may apply. Message frequency may vary. You can opt-out any time by replying STOP. Click <a href="#">HERE</a> to see our Privacy Policy. Call Cameron’s Pharmacy for further assistance.</p>
            <p>By tapping “Next”, you agree to this Pharmacy's<br/><a href="#">Terms of Use</a> and <a href="#">Privacy Notice</a>.</p>



            </div>



        </Wrapper>
    );
}


function Step_Register(props) {
    const {onNext, onBack, data, setDataValue, setData, version } = props;
    return (
        <Wrapper>
            <GuestHeader title="Refill prescription" description="Register with us" />

        <div className="lds-appsection">
            <div style={{border: '#ccc 1px solid', height: 400, width: '100%'}}></div>
        </div>

            <GuestButtonGroup onNext={onNext} onBack={onBack} />
        </Wrapper>



        
    );
}

