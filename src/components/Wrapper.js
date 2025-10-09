import React, { useState } from 'react';
// import './Wrapper.scss';




function Wrapper(props) {
    const { children, title, showHeader } = props;
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

        {/* <div class="lds-phonelayout-header"><i onClick={onClick} class="lds-graphic is-type-youtpharmacy-inv"></i></div> */}
        {showHeader !== false && <div class="lds-phonelayout-header"><i onClick={onClick} class="lds-graphic is-type-youtpharmacy-inv"></i></div>}
        <div class="lds-phonelayout-content is-rel">

            {false && <div className="lds-loader"><div className="lds-loader-spinner"></div></div>}

            {children}


        </div>
        <div class="lds-phonelayout-url">yourpharmacy.com</div> 
        

    </div>

    );
}

export default Wrapper;