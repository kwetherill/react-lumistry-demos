import React, { useState } from 'react';
import './GuestAppt.scss';

export { RadioButton, ButtonGroup };

function RadioButton(props) {
    const { label, value, name, style, className, onClick, selected } = props;
    return (
        <label class="lds-checkbox is-type-radio is-sprite is-debug222 is-size-lg" style={style} className={className}>{label}
            <input type="radio" name={name} value={value} checked={selected} class="lds-checkbox-input" onClick={onClick} />
            <span class="lds-checkbox-checkmark"></span>
        </label>
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

