import React from 'react';
import { Link } from "react-router-dom";

const MenuItem = ({text}) => {

    return (
        // <li className="menu-li"><a href={`/${text.replace(" ", "_")}`}>{text}</a></li>
        <li className="menu-li"> <Link to={`${text === 'home' ? '/' : '/'+text}`}>{text}</Link> </li>
        
    );
};

export default MenuItem;