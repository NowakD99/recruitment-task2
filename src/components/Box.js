import React from 'react';

const Box = ({id,color,backgroundColor,text,onHover}) => {

    return (
    <div className={`box`} value={id}  onMouseOver={onHover} onMouseOut={onHover} style={{color: color, backgroundColor: backgroundColor, border: `1px solid ${color}`}}>{text}<span style={{color: color}}>{id}</span></div>
    );
};

export default Box;