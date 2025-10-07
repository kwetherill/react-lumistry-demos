import React from 'react';
import './GuestAppt.scss';

function RadioButton(props) {
    const { label, value, name, style, className} = props;
    return (
        <label class="lds-checkbox is-type-radio is-sprite is-debug is-size-lg" style={style} className={className}>{label}
            <input type="radio" name={name} value={value} class="lds-checkbox-input" />
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
    
function GuestAppt() {
    return (
        <div id="guestappt">

            <div class="lds-phonelayout">
                <div class="lds-phonelayout-header">
                    <i class="lds-graphic is-type-youtpharmacy-inv"></i>
                </div>
                <div class="lds-phonelayout-content">

                    <GuestApptHeader title="Select a service" />


                    <div class="lds-spritesplit" id="guestappt-stores">
                        <div class="lds-spritesplit-left is-rel is-abs-all">


                            <RadioButton label222="Radio 1" value="1" name="radiogroup" style={{top: 113, left: 20, height: 60, }} />
                            <RadioButton label222="Radio 2" value="2" name="radiogroup" style={{top: 196, left: 20, height: 60, }}  />


                        </div>
                        <div class="lds-spritesplit-right"></div>
                    </div>

                    <div class="cds-appsection is-group is-gap-16">

                        <button class="lds-button">Back</button>
                        <button class="lds-button is-primary">Next</button>

                    </div>




                </div>
                <div class="lds-phonelayout-url">youtpharmacy.com</div> 
                

            </div>



        </div>
    );
}

export default GuestAppt;