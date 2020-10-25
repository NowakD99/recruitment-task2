import React from 'react';
import HeaderIcons from './HeaderIcons';

const Header = () => {

    return (
        <div className="header">
          <img src='/images/header-img-1.jpg' alt="zdj glowne"/>
            <h1 className="white-text">Feel the Power of Typography</h1>
            <HeaderIcons/>
        </div>
    );
};

export default Header;