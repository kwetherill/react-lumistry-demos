import React, { useState } from 'react';
import { Step_Camera, Step_Stores, Step_Services, Step_Signin, Step_Date, Step_Time, Step_Confirm } from './GuestAppt_steps';
import './GuestAppt.scss';


// version pages
const versionPages = [
    [ // version 1
        Step_Camera,
        Step_Services,
        Step_Stores, 
        Step_Signin,
        Step_Date,
        Step_Time,
        Step_Confirm,
    ],
    [ // version 2
        Step_Camera,
        Step_Stores, // stores first
        Step_Services,
        Step_Signin,
        Step_Date,
        Step_Time,
        Step_Confirm,
    ],
];



// main component
function GuestAppt() {
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
        <div id="guestappt">
            {Page}
        </div>
    );
}

export default GuestAppt;

