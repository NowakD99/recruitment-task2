import React from 'react';
import MenuItem from './MenuItem';
import Logo from './Logo';
const Menu = props => {
    const menuTable = [
        {key: "1", text: "pogoda"},
        {key: "2", text: "news"},
        {key: "3", text: "menu"},
        {key: "4", text: "home"}
      ];

    return (
        <div className="row menu">
            <div className="col col s12 m12 xl10 offset-xl1">
            <Logo />
                <ul className="menu-ul">
                    {menuTable.map(({key, text}) => 
                        <MenuItem key={key} text={text === 'pogoda' ? 'weather' : text}/>
                    )}
                </ul>
                <div className="menu-mobile"></div>
            </div>
      </div>
    );
};

export default Menu;