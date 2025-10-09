import React, { useState } from 'react';
import { Wrapper, AltInput, Input } from '../../components';
// import { GuestRefillHeader } from './GuestRefill_comps';
import { GuestHeader, GuestButtonGroup } from '../../components';
import './GuestRefill.scss';

export { Step_Number, Step_Confirm, Step_Camera };

// steps

function Step_Camera(props) {
    const {onNext, onBack } = props;
    return (
        <div class="lds-phonelayout is-type-camera" onClick={onNext}></div>
    );
}

    

function Step_Confirm(props){
    const {onNext, onBack, data, setDataValue } = props;
    return (
        <Wrapper title="Confirm">
            <div className="lds-appsection is-stack" id="guestrefill-confirm">
                <GuestHeader title="Refill prescription" description="Thanks for choosing Your Pharmacy!" />
            </div>


            <div className="lds-appsection is-stack" style={{gap: 40,}}>

            <div className="lds-graphic is-type-refillconfirm is-margin-auto" style={{height: 280, width: '100%', }}></div>

            {/* <GuestButtonGroup onNext={onNext} onBack={onBack} />     */}

            <button className="lds-button is-primary is-size-lg is-width-100p">Continue to YourPharmacy.com</button>

            </div>
        </Wrapper>
    );
}

function Step_Number(props) {
    const {onNext, onBack, data, setDataValue } = props;
    const [time, setTime] = useState(data?.time || false);




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
                


                    

                <div class="lds-altinput is-width-100p">
                    <input type="number" autocomplete="off" required />
                    <label>Rx number</label>
                </div>



                {/* <div class="lds-altinput is-iconic is-width-100p">
                    <input type="text" autocomplete="off" required />
                    <label>First name</label>
                </div> */}


                {/* <input className="lds-input" placeholder="Enter prescription number" /> */}



            </div>

            <GuestButtonGroup onNext={onNext} onBack22={onBack} />    
        </Wrapper>
    );
}

