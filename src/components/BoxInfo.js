import React from 'react';

const BoxInfo = ({text, longText, color, backgroundColor}) => {

    return (
        <div className="long-text" style={{backgroundColor: backgroundColor, border: `1px solid ${color}`}}>
            <span style={{color: color}}>Text from {text}</span>
            <p>{longText}</p>
        </div>
    );
};

export default BoxInfo;