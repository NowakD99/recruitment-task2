import React from 'react';

const Icon = ({id, img, text}) => {

    return (
              <div className={`header-icon header-icon-${id}`} >
                <img src={img} alt=""/>
                <p>{text}</p>
              </div>
    );
};

export default Icon;