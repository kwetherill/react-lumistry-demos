import React, { useState } from 'react';
import { Step_Number, Step_Confirm, Step_Camera, Step_Signin } from './GuestRefill_steps';
import './GuestRefill.scss';

function Step_Phone(props){
    const {onNext, onBack } = props;
    return (
        <div id="guestrefill-phone">
            sdfasdf
        </div>
    );
}


/**/

// version pages
const versionPages = [
    [ // version 1
        Step_Camera,
        Step_Number,
        Step_Confirm,
        Step_Signin,
    ],
    [ // version 2
        Step_Camera,
        Step_Number,
        Step_Confirm,
    ],
];



// main component
function GuestRefill() {
    const [data, setData] = useState({});
    const [Page, setPage] = useState(null);
    const [step, setStep] = useState(0);
    const [version, setVersion] = useState(1);
    const [pages, setPages] = useState(versionPages[0]);



    // init
    React.useEffect(() => {
        const version2 = parseInt(window?.location?.hash?.split('#')[1]) || 0;
        const index = version2 - 1;
        if(versionPages[index]) {
            setVersion(version2);
            setPages(versionPages[index]);
        }
    }, []);

    // setp through pages
    React.useEffect(() => {
        const Element = pages[step];
        const onBack2 = step > 1 ? onBack : undefined;
        setPage(<Element onNext={onNext} onBack={onBack2} data={data} setDataValue={setDataValue} setData={setData2} />);
    }, [step]);
    

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



    return (
        <div id="guestrefill">
            {Page}
        </div>
    );
}
/*
function GuestRefill222(){
    return (
        <div id="guestrefill">
            <Page />
        </div>
    );
}
    */

export default GuestRefill;