import React from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import CopyRight from './components/CopyRight';
import './index.css';

function AppRender() {
    
    return (
        <div>
            <Navbar />
            <Main />
            <CopyRight />
        </div>
    );
}


export default AppRender;