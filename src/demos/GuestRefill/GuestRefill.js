import React, { useState } from 'react';
import { Step_Number, Step_Confirm, Step_Camera } from './GuestRefill_steps';
import './GuestRefill.scss';






function GuestRefill() {
    const [data, setData] = useState({});
    const [Page, setPage] = useState(null);
    const [step, setStep] = useState(0);
    const pages = [
        Step_Camera,
        Step_Number,
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
        const onBack2 = step > 0 ? onBack : undefined;
        const onNext2 = step < pages.length - 1 ? onNext : undefined;
        setPage(<Element onNext={onNext2} onBack={onBack2} data={data} setDataValue={setDataValue} setData={setData2} />);
    }, [step]);


    return (
        <div id="guestrefill">

            {Page}

        </div>
    );
}

export default GuestRefill;