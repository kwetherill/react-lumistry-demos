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



    const onNext2 = () => {
        if(!value) return;
        setDataValue('store', value);
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


                    <RadioButton onClick={() => setValue('1')} value="1" name="radiogroup" style={{top: 113, left: 20, height: 60, width: '100%', }} />
                    <RadioButton onClick={() => setValue('2')} value="2" name="radiogroup" style={{top: 196, left: 20, height: 60, width: '100%', }}  />
                    <RadioButton onClick={() => setValue('3')} value="3" name="radiogroup" style={{top: 279, left: 20, height: 60, width: '100%', }}  />
                    <RadioButton onClick={() => setValue('4')} value="4" name="radiogroup" style={{top: 363, left: 20, height: 60, width: '100%', }}  />
                    <RadioButton onClick={() => setValue('5')} value="5" name="radiogroup" style={{top: 449, left: 20, height: 60, width: '100%', }}  />


                </div>
                <div class="lds-spritesplit-right"></div>
            </div>

            <ButtonGroup onNext={onNext2}  />

        </Wrapper>
    );
}
function Step_Services(props) {
    const {onNext, onBack } = props;
    return (
        <Wrapper title="Select a service">

<ButtonGroup onNext={onNext} onBack={onBack} />
        </Wrapper>
    );
}
function Step_Signin(props) {
    const {onNext, onBack } = props;
    return (
        <Wrapper title="Sign in or guest?">


            <ButtonGroup onNext={onNext} onBack={onBack} />
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

    



function GuestAppt() {
    const [data, setData] = useState({});
    const [Page, setPage] = useState(null);
    const [step, setStep] = useState(0);
    const pages = [
        // Step_Camera,
        Step_Date,
        Step_Stores, 
        Step_Services,
        Step_Signin,
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

    const setData2 = (value) => {
        setData({ ...data, ...value });
    }

    
    React.useEffect(() => {
        const Element = pages[step];
        setPage(<Element onNext={onNext} onBack={onBack} data={data} setDataValue={setDataValue} setData={setData2} />);
    }, [step]);


    return (
        <div id="guestappt">

            {Page}

        </div>
    );
}

export default GuestAppt;

