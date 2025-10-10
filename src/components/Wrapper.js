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
            <a href="/" className="lds-phonelayout-home"></a>

        {/* <div class="lds-phonelayout-header"><i onClick={onClick} class="lds-graphic is-type-youtpharmacy-inv"></i></div> */}
        {showHeader !== false && <div class="lds-phonelayout-header"><i onClick={onClick} class="lds-graphic is-type-youtpharmacy-inv"></i></div>}
        <div class="lds-phonelayout-content is-rel">

            {loading && <div className="lds-loader"><div className="lds-loader-spinner"></div></div>}

            {children}


        </div>
        <a href="/" class="lds-phonelayout-url">yourpharmacy.com</a> 
        

    </div>

    );
}

export default Wrapper;