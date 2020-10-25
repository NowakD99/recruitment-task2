import React from 'react';
import Icon from './Icon';

const HeaderIcons = props => {
    const headerTable  = [
        {key: "1", img: "/images/headerListImg-1.png", text: "Typography" },
        {key: "2", img: "/images/headerListImg-2.png", text: "Responsive Web Design" },
        {key: "3", img: "/images/headerListImg-3.png", text: "UX Design" }
      ];

    return (
        <div className="header-three-icons">
            {headerTable.map(({key, img, text}) =>  
                <Icon id={key} img={img} text={text} key={key}/>
            )}
        </div>
    );
};

export default HeaderIcons;