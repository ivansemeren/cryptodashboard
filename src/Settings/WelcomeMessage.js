import React from 'react';
//import App from '../App';
import { AppContext } from '../App/AppProvider';

const WelcomeMessege = ({firstVisit}) => {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
             firstVisit ? <div >
                    Welcome to CryptoDash, please select you favorite coins to begin.{''}
                </div> : null
            }    
        </AppContext.Consumer>
    );
}

export default WelcomeMessege;