import React, { useState } from 'react';
import './GuestAppt.scss';

export { RadioButton, GuestApptHeader, ButtonGroup, Wrapper };

function RadioButton(props) {
    const { label, value, name, style, className, onClick, selected } = props;
    return (
        <label class="lds-checkbox is-type-radio is-sprite is-debug222 is-size-lg" style={style} className={className}>{label}
            <input type="radio" name={name} value={value} checked={selected} class="lds-checkbox-input" onClick={onClick} />
            <span class="lds-checkbox-checkmark"></span>
        </label>
    );
}

function GuestApptHeader(props) {
    const { title } = props;
    return (
        <div class="lds-guestappt-header">
            <p>Book an appointment</p>
            <b>{title}</b>
        </div>
    );
}

function ButtonGroup(props) {
    const { onNext, onBack } = props;
    return (
        <div class="lds-appsection is-group is-gap-16">
            {onBack && <button class="lds-button" onClick={onBack}>Back</button>}
            {onNext && <button class="lds-button is-primary" onClick={onNext}>Next</button>}
        </div>
    );
}


function Wrapper(props) {
    const { children, title } = props;
    const [loading, setLoading] = useState(false);

    const onClick = () => {
        window.location.href = '?';
    }

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (

        <div class="lds-phonelayout">

        <div class="lds-phonelayout-header">
            <i onClick={onClick} class="lds-graphic is-type-youtpharmacy-inv"></i>
        </div>
        <div class="lds-phonelayout-content is-rel">

            {loading && <div className="lds-loader is-fixedtop222"><div className="lds-loader-spinner"></div></div>}

            <GuestApptHeader title={title} />
            {children}


        </div>
        <div class="lds-phonelayout-url">yourpharmacy.com</div> 
        

    </div>

    );
}
