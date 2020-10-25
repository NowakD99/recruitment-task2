import React from 'react';
import Arrows from './Arrows';
 
const Photo = ({id, site}) => {

    return (
        <> 
            <div className={`photo photo-${site}`}>
              <img src={`/images/karuzela_${id}.jpg`} alt="" /> 
              <span></span>
              <Arrows id={id}/>
            </div>
        </>
    );
};

export default Photo;