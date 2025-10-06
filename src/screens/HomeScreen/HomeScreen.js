
// import { Link } from 'react-router-dom';
// import Button from '../components/Button';
import './HomeScreen.scss';

function HomeScreen() {
    return (
        <div id="home-screen" className="is-inverse">
            <i className="lds-logo" />
            <div className="lds-logo-tag">Demos</div>
            <div className="hs-firstname">
                <input type="text" id="firstname" placeholder="First Name" />
                <label htmlFor="firstname">First Name</label>
            </div>
        </div>
    );
}

export default HomeScreen;